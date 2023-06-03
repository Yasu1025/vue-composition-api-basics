<template>
  <div class="stats">
    <h1>Stats</h1>
    <table class="table is-full-width">
      <thead>
        <tr>
          <th>Stat</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number of Notes</td>
          <td>{{ noteStore.totalNoteCount }}</td>
        </tr>
        <tr>
          <td>Number of characters (of all notes)</td>
          <td>{{ noteStore.totalCharaCount }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
import { useNoteStore } from "@/stores/notes";

const noteStore = useNoteStore();
</script>

<style lang="scss" scoped></style>
