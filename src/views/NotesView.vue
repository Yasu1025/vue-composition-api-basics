<template>
  <div class="notes">
    <NoteForm @addNote="addNote" />
    <div v-if="notes.length">
      <NoteSingle v-for="note in notes" :key="note.id" :note="note" />
    </div>
    <div v-else>No Post.....</div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Note } from "@/types/Note";
import NoteSingle from "@/components/parts/NoteSingle.vue";
import NoteForm from "@/components/parts/NoteForm.vue";

const notes = ref<Note[]>([]);

const addNote = (newNote: Note) => {
  notes.value = [newNote, ...notes.value];
};
</script>

<style lang="scss" scoped></style>
