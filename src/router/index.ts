import { createRouter, createWebHistory } from "vue-router";
import NotesView from "@/views/NotesView.vue";
import NoteEditView from "@/views/NoteEditView.vue";
import StatsVuew from "@/views/StatsVuew.vue";

const routes = [
  {
    path: "/",
    name: "Notes",
    component: NotesView,
  },
  {
    path: "/edit-note/:id",
    name: "Edit-note",
    component: NoteEditView,
  },
  {
    path: "/stats",
    name: "Stats",
    component: StatsVuew,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
