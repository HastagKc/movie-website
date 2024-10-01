import { defineStore } from 'pinia';

// Define a store named 'counter'
export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      count: 0, // Initial state
    };
  },
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
  getters: {
    doubleCount: (state) => state.count * 2,
  },
});
