/**
 * ScrollToAnchor Plugin Core (Framework-agnostic)
 */

import type { ToolPluginCore, ToolContext, ToolResult } from "gui-chat-protocol";
import type { ScrollToAnchorArgs } from "./types";
import { TOOL_DEFINITION, SYSTEM_PROMPT } from "./definition";

// Re-export for convenience
export { TOOL_NAME, TOOL_DEFINITION, SYSTEM_PROMPT } from "./definition";

/**
 * Execute the scrollToAnchor function
 * Updates the current result's viewState to trigger scrolling in the document
 */
export const executeScrollToAnchor = async (
  context: ToolContext,
  args: ScrollToAnchorArgs,
): Promise<ToolResult> => {
  const { anchorId } = args;

  // We need to update the current result's viewState to trigger scrolling
  if (!context.currentResult) {
    return {
      message: "No document is currently displayed to scroll.",
      updating: false,
    };
  }

  return {
    ...context.currentResult,
    message: `Scrolled to ${anchorId}`,
    updating: true, // This will update the existing result instead of creating a new one
    viewState: {
      ...context.currentResult.viewState,
      scrollToAnchor: anchorId,
      scrollTimestamp: Date.now(), // Add timestamp to ensure reactivity even with same anchor
    },
    instructions: "Read the step aloud.",
    instructionsRequired: true,
  };
};

// Core Plugin (without UI components)
// Uses unknown types since this plugin passes through the currentResult
export const pluginCore: ToolPluginCore<unknown, unknown, ScrollToAnchorArgs> = {
  toolDefinition: TOOL_DEFINITION,
  execute: executeScrollToAnchor,
  generatingMessage: "Scrolling to section...",
  isEnabled: () => true,
  systemPrompt: SYSTEM_PROMPT,
};
