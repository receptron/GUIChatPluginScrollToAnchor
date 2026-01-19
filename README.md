# @gui-chat-plugin/scroll-to-anchor

[![npm version](https://badge.fury.io/js/%40gui-chat-plugin%2Fscroll-to-anchor.svg)](https://www.npmjs.com/package/@gui-chat-plugin/scroll-to-anchor)

A scroll-to-anchor plugin for [MulmoChat](https://github.com/receptron/MulmoChat).

## Overview

This plugin allows the AI to scroll the view to a specific tool result by its anchor ID. Useful for navigating between multiple results in a conversation.

## Installation

```bash
yarn add @gui-chat-plugin/scroll-to-anchor
```

## Usage

### Vue Implementation (for MulmoChat)

```typescript
// In src/tools/index.ts
import ScrollToAnchorPlugin from "@gui-chat-plugin/scroll-to-anchor/vue";

const pluginList = [
  // ... other plugins
  ScrollToAnchorPlugin,
];

// In src/main.ts
import "@gui-chat-plugin/scroll-to-anchor/style.css";
```

### Core Only (Framework-agnostic)

```typescript
import { pluginCore, TOOL_NAME } from "@gui-chat-plugin/scroll-to-anchor";
```

## Package Exports

| Export | Description |
|--------|-------------|
| `@gui-chat-plugin/scroll-to-anchor` | Core (framework-agnostic) |
| `@gui-chat-plugin/scroll-to-anchor/vue` | Vue implementation |
| `@gui-chat-plugin/scroll-to-anchor/style.css` | Tailwind CSS styles |

## Test Prompts

1. "Show me the previous image" (after generating multiple images)
2. "Go back to the first result"
3. "Scroll to the quiz"

## Development

```bash
yarn install
yarn dev        # Start dev server
yarn build      # Build
yarn typecheck  # Type check
yarn lint       # Lint
```

## License

MIT
