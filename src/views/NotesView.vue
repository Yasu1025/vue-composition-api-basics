<template>
  <div class="notes">
    <NoteForm />
    <div v-if="noteStore.notes.length">
      <NoteSingle v-for="note in noteStore.notes" :key="note.id" :note="note" />
    </div>
    <div v-else>No Post.....</div>
  </div>
</template>

<script lang="ts" setup>
import NoteSingle from "@/components/parts/NoteSingle.vue";
import NoteForm from "@/components/parts/NoteForm.vue";
import { useNoteStore } from "@/stores/notes";

const noteStore = useNoteStore();
</script>

<style lang="scss" scoped></style>
