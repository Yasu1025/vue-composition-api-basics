<template>
  <div class="notes">
    <NoteForm />
    <NoteSingle v-for="i in 3" :key="i" />
  </div>
</template>

<script lang="ts" setup>
import NoteSingle from "@/components/parts/NoteSingle.vue";
import NoteForm from "@/components/parts/NoteForm.vue";
</script>

<style lang="scss" scoped></style>
