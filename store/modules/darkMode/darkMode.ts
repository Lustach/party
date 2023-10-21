import { defineStore } from "pinia";
import type {
  IDarkModeState,
  IDarkModeActions,
  IDarkModeGetters,
} from "./darkMode_types";

export const useDarkModeStore = defineStore<
  string,
  IDarkModeState,
  IDarkModeGetters,
  IDarkModeActions
>("darkMode", {
  state: () => ({
    isDarkMode: false,
  }),
  actions: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
    },
  },
  getters: {
    getDarkMode() {
      return this.isDarkMode;
    },
  },
});
