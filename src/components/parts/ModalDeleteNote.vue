<template>
  <div class="modal" :class="{ 'is-active': props.modelValue }">
    <div class="modal-background"></div>
    <div class="modal-card" ref="modalCardRef">
      <header class="modal-card-head">
        <p class="modal-card-title">Modal title</p>
        <button
          class="delete"
          aria-label="close"
          @click="onCloseModal"
        ></button>
      </header>
      <section class="modal-card-body">
        Are you sure you want to delete this Note?
      </section>
      <footer class="modal-card-foot is-justify-content-flex-end">
        <button class="button" @click="onCloseModal">Cancel</button>
        <button class="button is-danger" @click="onDeleteNote">Delete</button>
      </footer>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, PropType } from "vue";
import { useNoteStore } from "@/stores/notes";
import { Note } from "@/types/Note";
import { onClickOutside } from "@vueuse/core";

const noteStore = useNoteStore();

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  note: {
    type: Object as PropType<Note>,
    required: true,
  },
});

const emits = defineEmits(["update:modelValue"]);

const modalCardRef = ref(null);

const onCloseModal = () => {
  emits("update:modelValue", false);
};

const onDeleteNote = () => {
  noteStore.deleteNote(props.note.id);
  emits("update:modelValue", false);
};

onClickOutside(modalCardRef, onCloseModal);
</script>
