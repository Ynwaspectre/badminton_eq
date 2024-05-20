// stores/counterStore.js
import { defineStore } from 'pinia';

export const useLoadingStore = defineStore('loading', {
    state: () => {
        return {
            loading: false
        };
    },
    actions: {
        setLoading(newLoading) {
            this.loading=newLoading;
        },

    }
});