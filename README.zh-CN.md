<p align="center">
  <img src="assets/readme-banner.svg" alt="Agent Shell Safety Check banner" width="100%">
</p>

<h1 align="center">Agent Shell Safety Check</h1>

<p align="center">检查 Agent 运行手册里的 shell 命令是否写清影响范围、验证和危险操作边界。</p>

<p align="center"><a href="README.md">English</a> · <a href="#quick-start">快速开始</a> · <a href="#checks">检查项</a> · <a href="#ci-usage">CI</a></p>

<p align="center">
  <img alt="Node.js" src="https://img.shields.io/badge/node-%3E%3D18-2563EB">
  <img alt="dependencies" src="https://img.shields.io/badge/dependencies-0-111827">
  <img alt="license" src="https://img.shields.io/badge/license-MIT-16A34A">
</p>

<p align="center">
  <img src="assets/cli-preview.svg" alt="Agent Shell Safety Check CLI preview" width="88%">
</p>

## 为什么做这个

AI Agent 工具越来越多，但很多仓库缺少能在本地和 CI 里重复执行的小检查。这个工具保持零依赖、可镜像、可复制，适合学生、独立开发者和开源维护者使用。

## Quick Start

```bash
npx github:aolingge/agent-shell-safety-check --path AGENTS.md
```

```bash
npx github:aolingge/agent-shell-safety-check --path AGENTS.md --markdown > report.md
npx github:aolingge/agent-shell-safety-check --path AGENTS.md --sarif > results.sarif
npx github:aolingge/agent-shell-safety-check --path AGENTS.md --annotations
```

## Checks

| Check | What it looks for |
| --- | --- |
| scope | Defines command scope. |
| verify | Includes verification or dry-run. |
| destructive | Names destructive operations. |
| approval | Requires confirmation for risky commands. |

## CI Usage

See [docs/github-actions.md](docs/github-actions.md) and [docs/quality-gates.md](docs/quality-gates.md).

## Mirrors

- GitHub: https://github.com/aolingge/agent-shell-safety-check
- Gitee: https://gitee.com/aolingge/agent-shell-safety-check

## Contributing

Good first PRs: add checks, add fixtures, improve docs, or add GitHub Actions examples.

## License

MIT
