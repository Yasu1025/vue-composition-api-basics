<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">{{ note.content }}</div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item">Edit</a>
      <a href="#" class="card-footer-item">Delete</a>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import { ref, PropType } from "vue";
import { Note } from "@/types/Note";

const props = defineProps({
  note: {
    type: Object as PropType<Note>,
    required: true,
  },
});

const note = ref(props.note);
</script>
