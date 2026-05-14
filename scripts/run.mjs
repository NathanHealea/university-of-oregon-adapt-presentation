#!/usr/bin/env node
import { spawn } from 'node:child_process';
import { existsSync, readdirSync, statSync } from 'node:fs';
import { resolve, join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const SRC_DIR = join(ROOT, 'src');
const DIST_DIR = join(ROOT, 'dist');
const DEFAULT_TARGET = 'presentation-1';

const [, , action, ...rest] = process.argv;

if (!action || action === 'help' || action === '--help') {
  printHelp();
  process.exit(0);
}

if (action === 'list') {
  listTargets();
  process.exit(0);
}

const target = pickTarget(rest);
const targetDir = join(SRC_DIR, target);
const deckPath = join(targetDir, 'deck.md');

if (!existsSync(deckPath)) {
  console.error(`Error: no deck.md found at ${deckPath}`);
  console.error(`Available targets:`);
  listTargets();
  process.exit(1);
}

const outDir = join(DIST_DIR, target);
const args = buildMarpArgs(action, targetDir, deckPath, outDir);

if (!args) {
  console.error(`Error: unknown action "${action}". Run \`npm run help\` for usage.`);
  process.exit(1);
}

console.log(`> marp ${args.join(' ')}`);
const child = spawn('marp', args, { stdio: 'inherit', cwd: ROOT });
child.on('exit', (code) => process.exit(code ?? 0));

function pickTarget(args) {
  const flagIdx = args.findIndex((a) => a === '--target' || a === '-t');
  if (flagIdx >= 0 && args[flagIdx + 1]) return args[flagIdx + 1];
  const eqArg = args.find((a) => a.startsWith('--target='));
  if (eqArg) return eqArg.slice('--target='.length);
  const positional = args.find((a) => !a.startsWith('-'));
  return positional || DEFAULT_TARGET;
}

function buildMarpArgs(action, targetDir, deckPath, outDir) {
  // Flags previously lived in .marprc.yml; folding them in here keeps the
  // CLI invocation self-contained.
  const common = ['--html', '--allow-local-files'];
  switch (action) {
    case 'dev':
      return [...common, '--watch', '--server', targetDir];
    case 'build':
      return [...common, '--output', join(outDir, 'deck.html'), deckPath];
    case 'pdf':
      return [...common, '--output', join(outDir, 'deck.pdf'), deckPath];
    case 'pptx':
      return [...common, '--output', join(outDir, 'deck.pptx'), deckPath];
    default:
      return null;
  }
}

function listTargets() {
  if (!existsSync(SRC_DIR)) {
    console.log('  (no src/ directory found)');
    return;
  }
  const entries = readdirSync(SRC_DIR).filter((name) => {
    const full = join(SRC_DIR, name);
    return statSync(full).isDirectory() && existsSync(join(full, 'deck.md'));
  });
  if (entries.length === 0) {
    console.log('  (no presentations found in src/)');
    return;
  }
  for (const name of entries) {
    console.log(`  ${name}${name === DEFAULT_TARGET ? ' (default)' : ''}`);
  }
}

function printHelp() {
  console.log(`Usage: npm run <action> [-- <target>]

Actions:
  dev     Start marp dev server with --watch
  build   Build deck.html into dist/<target>/
  pdf     Build deck.pdf into dist/<target>/
  pptx    Build deck.pptx into dist/<target>/
  list    List available presentation targets
  help    Show this message

Target selection (any of):
  npm run build -- presentation-1
  npm run build -- --target=presentation-1
  npm run build -- -t presentation-1

If no target is provided, "${DEFAULT_TARGET}" is used.`);
}
