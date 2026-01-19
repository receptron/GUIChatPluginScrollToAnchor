/**
 * ScrollToAnchor Tool Definition (Schema)
 */

import type { ToolDefinition } from "gui-chat-protocol";

export const TOOL_NAME = "scrollToAnchor";

export const TOOL_DEFINITION: ToolDefinition = {
  type: "function",
  name: TOOL_NAME,
  description:
    "Scroll the current document view to a specific anchor tag. Use this when reading recipe steps aloud or navigating to specific sections.",
  parameters: {
    type: "object",
    properties: {
      anchorId: {
        type: "string",
        description:
          'The ID of the anchor tag to scroll to (e.g., "step-1", "step-2"). Should match the anchor IDs in the document.',
      },
    },
    required: ["anchorId"],
  },
};

export const SYSTEM_PROMPT = `Use the ${TOOL_NAME} API to scroll the document view to a specific anchor when the user asks to read a specific step or navigate to a section. For example, when the user says "read step 3" or "what's next?", call this function with the appropriate anchor ID (e.g., "step-3") BEFORE or AFTER reading the step aloud.`;
