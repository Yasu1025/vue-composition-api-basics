<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">{{ note.content }}</div>
      <div class="has-text-right has-text-grey-light mt-2">
        <small>{{ contentsLength }} characters</small>
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item">Edit</a>
      <a href="#" class="card-footer-item" @click="onDeleteNote">Delete</a>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import { ref, PropType, computed } from "vue";
import { Note } from "@/types/Note";

const props = defineProps({
  note: {
    type: Object as PropType<Note>,
    required: true,
  },
});

const emit = defineEmits(["deleteNote"]);

const note = ref(props.note);

const contentsLength = computed(() => note.value.content.length);

const onDeleteNote = () => {
  emit("deleteNote", note.value.id);
};
</script>
