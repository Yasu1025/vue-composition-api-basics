import { defineStore, type _GettersTree } from "pinia";
import { Note } from "@/types/Note";

interface StateTypes {
  notes: Note[];
}

interface GettersType extends _GettersTree<StateTypes> {
  noteLength: (state: StateTypes) => number;
}

interface ActionsType {
  addNote: (newContent: string) => void;
  deleteNote: (noteId: string) => void;
}

export const useNoteStore = defineStore<
  string,
  StateTypes,
  GettersType,
  ActionsType
>({
  id: "storeNotes",
  state: () => ({ notes: [] }),
  getters: {
    noteLength(state) {
      return state.notes.length;
    },
  },
  actions: {
    addNote(newContent: string) {
      const newId = new Date().getTime().toString();
      const newNote: Note = {
        id: newId,
        content: newContent,
      };
      this.notes = [newNote, ...this.notes];
      console.log(this.notes);
    },
    deleteNote(noteId: string) {
      this.notes = this.notes.filter((note) => note.id !== noteId);
    },
  },
});
