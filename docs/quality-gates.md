# Quality Gates

Use Agent Shell Safety Check before an AI agent or maintainer marks work as done.

```bash
npx github:aolingge/agent-shell-safety-check --path AGENTS.md
```

Exit codes:

- 0: score meets the threshold.
- 1: check ran but the score is too low.
- 2: invalid input or command usage.

Security:

- Do not paste real secrets into public issues.
- Use redacted fixtures for false-positive reports.
- Prefer conservative CI thresholds until you have real-world samples.
