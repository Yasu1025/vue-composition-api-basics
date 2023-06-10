<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">{{ note.content }}</div>
      <div class="has-text-right has-text-grey-light mt-2">
        <small>{{ contentsLength }} characters</small>
      </div>
    </div>
    <footer class="card-footer">
      <RouterLink
        :to="`/edit-note/${note.id}`"
        href="#"
        class="card-footer-item"
        >Edit</RouterLink
      >
      <a href="#" class="card-footer-item" @click="onDeleteNoteConfirm"
        >Delete</a
      >
    </footer>
    <ModalDeleteNote v-model="modals.deleteNote" :note="note" />
  </div>
</template>

<script lang="ts" setup>
import { ref, PropType, computed, reactive } from "vue";
import { Note } from "@/types/Note";
import ModalDeleteNote from "@/components/parts/ModalDeleteNote.vue";

const props = defineProps({
  note: {
    type: Object as PropType<Note>,
    required: true,
  },
});

const note = ref(props.note);

const contentsLength = computed(() => note.value.content.length);

const onDeleteNoteConfirm = () => {
  modals.deleteNote = true;
};

const modals = reactive({
  deleteNote: false,
});
</script>
