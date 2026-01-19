<template>
  <div class="max-w-3xl mx-auto p-8">
    <h1 class="text-2xl font-bold text-gray-800 mb-8">{{ pluginName }} Demo</h1>

    <!-- Plugin Info -->
    <div class="bg-white rounded-lg p-5 mb-5 shadow-md">
      <h2 class="text-gray-600 text-xl mb-4">Plugin Information</h2>
      <div class="space-y-2 text-sm">
        <p><strong>Tool Name:</strong> {{ pluginName }}</p>
        <p><strong>Description:</strong> {{ description }}</p>
      </div>
    </div>

    <!-- Test Execution -->
    <div class="bg-white rounded-lg p-5 mb-5 shadow-md">
      <h2 class="text-gray-600 text-xl mb-4">Test Execution</h2>
      <div class="flex gap-2 mb-4">
        <input
          v-model="anchorId"
          type="text"
          placeholder="Enter anchor ID (e.g., step-1)"
          class="flex-1 px-3 py-2 border border-gray-300 rounded text-sm"
        />
        <button
          @click="testExecute"
          class="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 text-sm"
        >
          Execute
        </button>
      </div>
      <div v-if="result" class="mt-4 p-3 bg-gray-100 rounded">
        <pre class="text-xs overflow-auto">{{ JSON.stringify(result, null, 2) }}</pre>
      </div>
    </div>

    <!-- Note about this plugin -->
    <div class="bg-yellow-50 rounded-lg p-5 shadow-md border border-yellow-200">
      <h2 class="text-yellow-800 text-lg mb-2">Note</h2>
      <p class="text-yellow-700 text-sm">
        This plugin does not have a View or Preview component. It is designed to work
        in conjunction with other plugins (like presentDocument) by updating the
        viewState of the current result to trigger scrolling to specific anchors.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { plugin, executeScrollToAnchor } from "../src/vue";
import type { ToolResult, ToolContext } from "gui-chat-protocol";

const pluginName = computed(() => plugin.toolDefinition.name);
const description = computed(() => plugin.toolDefinition.description);

const anchorId = ref("step-1");
const result = ref<ToolResult | null>(null);

const testExecute = async () => {
  // Create a mock context with a current result
  const mockContext: ToolContext = {
    currentResult: {
      toolName: "presentDocument",
      uuid: "mock-uuid",
      message: "Document displayed",
      title: "Sample Document",
      data: { content: "Sample content" },
      viewState: {},
    },
  };

  result.value = await executeScrollToAnchor(mockContext, {
    anchorId: anchorId.value,
  });
};
</script>
