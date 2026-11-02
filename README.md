# step7-tools: dev environment

Node runs inside a Docker container, so nothing is installed on Windows.
My files stay in this folder; only the runtime lives in the container.

## Requirements

- Docker Desktop installed and **running**
- `compose.yaml` in this folder
- Internet (only for the first pull / updates)

## Daily use

Open a terminal **in this folder** (VS Code: Terminal > New Terminal).

```powershell
docker compose up -d                      # start the container in the background
docker compose exec dev node market.js    # run a script inside it
docker compose down                       # stop and remove the container (files stay)
```

Other useful ones:

```powershell
docker compose exec dev bash              # shell inside the container (type `exit` to leave)
docker compose exec dev node -v           # check Node version
docker compose ps                         # is it running?
```

## Updating Node (occasionally)

```powershell
docker compose pull                       # download newest node:26-slim
docker compose up -d                      # recreate the container with it
```

Updates never happen automatically.

## compose.yaml

```yaml
services:
  dev:
    image: node:26-slim
    working_dir: /app
    volumes:
      - .:/app
    command: sleep infinity
```

## Git

Commit: `compose.yaml`, `README.md`, source files.
Don't commit (`.gitignore`):

```
node_modules/
.env
```

## Troubleshooting

- `no configuration file provided`: wrong folder, `cd` to the project folder.
- `Cannot connect to the Docker daemon`: start Docker Desktop.
- Container exits immediately: check `command: sleep infinity` is in `compose.yaml`.
- Files not visible in the container: check Docker Desktop > Settings > Resources > File sharing.