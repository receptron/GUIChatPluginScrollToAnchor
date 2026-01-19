/**
 * ScrollToAnchor Plugin - Core (Framework-agnostic)
 */

// Export plugin-specific types
export type { ScrollToAnchorArgs } from "./types";

// Export plugin utilities
export {
  TOOL_NAME,
  TOOL_DEFINITION,
  SYSTEM_PROMPT,
  executeScrollToAnchor,
  pluginCore,
} from "./plugin";
