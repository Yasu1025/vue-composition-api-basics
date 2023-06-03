<template>
  <div class="mb-4">
    <div class="field mb-2">
      <label class="label">Message</label>
      <div class="control">
        <textarea
          v-model="newNote"
          class="textarea"
          placeholder="Textarea"
        ></textarea>
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <button
          class="button is-link has-background-success"
          :disabled="!newNote"
          @click="onAddNote"
        >
          Add New Note
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useNoteStore } from "@/stores/notes";

const noteStore = useNoteStore();

const newNote = ref("");

const onAddNote = () => {
  noteStore.addNote(newNote.value);
  newNote.value = "";
};
</script>
