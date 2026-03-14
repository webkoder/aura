# Aura

A monorepo application built with NestJS, Vue 3, Prisma, JWT, and Docker.

## Structure

```
/
├── packages/
│   ├── contracts/   # Shared types and interfaces
│   ├── sdk/         # Frontend SDK to interact with the API
│   └── shared/      # Shared utilities and constants
├── apps/
│   ├── api/         # NestJS backend
│   └── web/         # Vue 3 frontend
├── infra/
│   └── docker-compose.yml
├── docs/
└── .vscode/
    └── launch.json
```

## Prerequisites

- Node.js 20+
- pnpm 8+
- Docker & Docker Compose

## Getting Started

### Install dependencies

```bash
pnpm install
```

### Development

Run both API and web in development mode:

```bash
# API (NestJS)
pnpm dev:api

# Web (Vue 3)
pnpm dev:web

# Or run with Docker
pnpm dev
```

### Build

```bash
pnpm build
```

### Database

```bash
# Run Prisma migrations
pnpm prisma:migrate

# Open Prisma Studio
pnpm prisma:studio
```

### Docker

```bash
docker-compose -f infra/docker-compose.yml up
```

## Environment Variables

Copy `.env.example` to `.env` and fill in the values:

| Variable          | Description            | Default  |
| ----------------- | ---------------------- | -------- |
| `JWT_SECRET`      | JWT signing secret     | -        |
| `DATABASE_URL`    | Postgres connection URL| -        |
| `POSTGRES_USER`   | Postgres user          | `aura`   |
| `POSTGRES_PASSWORD` | Postgres password    | `aura`   |
| `POSTGRES_DB`     | Postgres database name | `aura`   |
