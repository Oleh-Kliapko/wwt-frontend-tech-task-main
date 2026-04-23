# WinWinTravel Filter Modal

Interactive filter modal component for a travel booking application built with React, TypeScript, and Tailwind CSS.

## Overview

This project implements a sophisticated filter system that allows users to refine travel search results based on multiple criteria including meal options, room facilities, bed types, and amenities. The system features real-time state management, confirmation dialogs for changes, and a fully responsive design that adapts seamlessly across mobile, tablet, and desktop viewports.

## Key Features

- **Interactive Filter Modal** — Multi-category filter selection with smooth UX
- **Confirmation Dialog** — Prevents accidental filter changes with a confirmation step
- **Responsive Design** — Adaptive spacing (16px mobile, 40px tablet, 80px desktop)
- **State Management** — Zustand for global filter state, including previous filter preservation
- **Internationalization** — Support for multiple languages (English/Ukrainian)
- **Semantic HTML** — Accessible component structure with proper ARIA labels
- **Design System Alignment** — Consistent colors (#FF5F00), typography, and spacing throughout

## Technology Stack

- **React 18** + TypeScript — Type-safe component development
- **Vite** — Lightning-fast build tool with HMR
- **Tailwind CSS** — Utility-first styling with design system tokens
- **Zustand** — Lightweight state management for filter persistence
- **React Query** — Data fetching and caching (pre-configured, ready to integrate with API)
- **React i18next** — Internationalization framework
- **Vitest** — Fast unit testing with React support

## Getting Started

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

Starts the dev server at `http://localhost:3000` with hot module replacement.

### Build

```bash
pnpm build
```

Compiles the project to optimized production bundle in the `dist/` folder.

### Preview

```bash
pnpm preview
```

Serves the production build locally for testing.

## See Also

- [Task Requirements](./TASK.md) — Original assignment specifications
- [Developer Approach](./DEV_APPROACH.md) - how to create this app
- [Figma Design](https://www.figma.com/file/cnBVURUTntc8peGEfKexoY/WWT-Test-task) — Design mockups and specifications
