/**
 * ScrollToAnchor Plugin - Vue Implementation
 *
 * Note: This plugin has no View or Preview components
 * It only updates the viewState of the current result to trigger scrolling
 */

import "../style.css";

import type { ToolPlugin } from "gui-chat-protocol/vue";
import type { ScrollToAnchorArgs } from "../core/types";
import { pluginCore } from "../core/plugin";

export const plugin: ToolPlugin<unknown, unknown, ScrollToAnchorArgs> = {
  ...pluginCore,
  // No viewComponent or previewComponent - this plugin updates existing results
};

// Re-export types
export type { ScrollToAnchorArgs } from "../core/types";

// Re-export utilities
export {
  TOOL_NAME,
  TOOL_DEFINITION,
  SYSTEM_PROMPT,
  executeScrollToAnchor,
  pluginCore,
} from "../core/plugin";

// Default export for MulmoChat compatibility
export default { plugin };
