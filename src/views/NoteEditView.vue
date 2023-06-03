<template>
  <div class="note-edit" v-if="note">
    <NoteForm v-model="note.content" place-holder="Edit your note" label="Edit">
      <template #buttons>
        <button class="button is-link is-light mr-2" @click="$router.push('/')">
          Cencel
        </button>
        <button
          class="button is-link has-background-success"
          :disabled="!note.content"
          @click="onEditNote"
        >
          Edit Note
        </button>
      </template>
    </NoteForm>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import NoteForm from "@/components/parts/NoteForm.vue";
import { useNoteStore } from "@/stores/notes";
import { useRoute } from "vue-router";
import router from "@/router";
import { Note } from "@/types/Note";

const route = useRoute();
const noteStore = useNoteStore();
const note = ref({ id: "", content: "" });
const noteId = route.params.id as string;

onMounted(() => {
  const thisNote = noteStore.getNoteById(noteId);
  if (!thisNote) {
    router.push("/");
  } else {
    note.value = { ...thisNote };
  }
});

const onEditNote = () => {
  const payload: Note = {
    id: noteId,
    content: note.value.content,
  };
  noteStore.updateNote(payload);
  router.push("/");
};
</script>

<style lang="scss" scoped></style>
