<template>
  <div class="mb-4">
    <div class="field mb-2">
      <label class="label">{{ props.label }}</label>
      <div class="control">
        <textarea
          :value="props.modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
          class="textarea"
          :placeholder="props.placeHolder"
          v-autofocus
        ></textarea>
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { vAutofocus } from "@/directives/vAutofocus";

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  placeHolder: {
    type: String,
    default: "Add new Note",
  },
  label: {
    type: String,
    default: "Create",
  },
});
</script>
