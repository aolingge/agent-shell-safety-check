#!/usr/bin/env node
import process from 'node:process';
import { parseArgs } from 'node:util';
import { checkFile, formatAnnotations, formatMarkdown, formatSarif, formatText } from './check.js';

const VERSION = '0.1.0';

function usage() {
  console.log(`agent-shell-safety-check v${VERSION}

Usage:
  agent-shell-safety-check --path FILE_OR_DIR
  agent-shell-safety-check FILE_OR_DIR --markdown
  agent-shell-safety-check FILE_OR_DIR --sarif > results.sarif
  agent-shell-safety-check FILE_OR_DIR --annotations
  agent-shell-safety-check FILE_OR_DIR --redact

Options:
  --path <path>       File or directory to inspect.
  --min-score <n>    Minimum passing score. Default: 75.
  --json             Print JSON report.
  --markdown         Print Markdown report.
  --sarif            Print SARIF report.
  --annotations      Print GitHub Actions annotations.
  --redact           Print redacted input.
  --version          Print version.
  -h, --help         Show help.
`);
}

try {
  const { values, positionals } = parseArgs({
    args: process.argv.slice(2),
    allowPositionals: true,
    options: {
      path: { type: 'string' },
      'min-score': { type: 'string', default: '75' },
      json: { type: 'boolean' },
      markdown: { type: 'boolean' },
      sarif: { type: 'boolean' },
      annotations: { type: 'boolean' },
      redact: { type: 'boolean' },
      version: { type: 'boolean' },
      help: { type: 'boolean', short: 'h' }
    }
  });
  if (values.version) { console.log(VERSION); process.exit(0); }
  if (values.help) { usage(); process.exit(0); }
  const target = values.path ?? positionals[0];
  if (!target) throw new Error('Missing --path FILE_OR_DIR');
  const report = checkFile(target);
  if (values.redact) console.log(report.redacted);
  else if (values.json) console.log(JSON.stringify(report, null, 2));
  else if (values.markdown) console.log(formatMarkdown(report));
  else if (values.sarif) console.log(JSON.stringify(formatSarif(report), null, 2));
  else if (values.annotations) console.log(formatAnnotations(report));
  else console.log(formatText(report));
  process.exit(report.score >= Number(values['min-score']) ? 0 : 1);
} catch (error) {
  console.error(`agent-shell-safety-check: ${error.message}`);
  process.exit(2);
}
