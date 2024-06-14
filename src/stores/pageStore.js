// stores/counterStore.js
import { defineStore } from 'pinia';

export const usePageStore = defineStore('page', {
    state: () => {
        return {
            page: 1
        };
    },
    actions: {
        setPage(newPage) {
            this.page=newPage;
        },

    }
});