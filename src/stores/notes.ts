import { defineStore, type _GettersTree } from "pinia";
import { Note } from "@/types/Note";

interface StateTypes {
  notes: Note[];
}

interface GettersType extends _GettersTree<StateTypes> {
  getNoteById: (state: StateTypes) => (id: string) => Note;
  totalNoteCount: (state: StateTypes) => number;
  totalCharaCount: (state: StateTypes) => number;
}

interface ActionsType {
  addNote: (newContent: string) => void;
  deleteNote: (noteId: string) => void;
  updateNote: (updateNote: Note) => void;
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
    getNoteById(state) {
      return (id: string) => state.notes.find((note) => note.id === id)!;
    },
    totalNoteCount: (state) => state.notes.length,
    totalCharaCount: (state) => {
      let count = 0;
      state.notes.forEach((note) => {
        count += note.content.length;
      });

      return count;
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
    updateNote(updateNote: Note) {
      const index = this.notes.findIndex((note) => note.id === updateNote.id);
      this.notes[index].content = updateNote.content;
    },
  },
});
