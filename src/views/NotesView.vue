<template>
  <div class="notes">
    <NoteForm v-model="newNote">
      <template #buttons>
        <button
          class="button is-link has-background-success"
          :disabled="!newNote"
          @click="onAddNote"
        >
          Add New Note
        </button>
      </template>
    </NoteForm>
    <div v-if="noteStore.notes.length">
      <NoteSingle v-for="note in noteStore.notes" :key="note.id" :note="note" />
    </div>
    <div v-else>No Post.....</div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import NoteSingle from "@/components/parts/NoteSingle.vue";
import NoteForm from "@/components/parts/NoteForm.vue";
import { useNoteStore } from "@/stores/notes";

const noteStore = useNoteStore();

const newNote = ref("");
const onAddNote = () => {
  noteStore.addNote(newNote.value);
  newNote.value = "";
};
</script>

<style lang="scss" scoped></style>
