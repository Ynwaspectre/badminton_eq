// stores/counterStore.js
import { defineStore } from 'pinia';

export const useCategoryStore = defineStore('category', {
    state: () => {
        return {
            category: 'rackets'
        };
    },
    actions: {
        setCategory(newCategory) {
            this.category=newCategory;
        },

    }
});