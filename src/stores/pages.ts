import { defineStore } from "pinia";
import { ref } from "vue";

export const usePageStore = defineStore('pages', () => {
    type PageOptions = 'home' | 'timer'

    const active = ref<PageOptions>('home')
    const setPage = (pageOption: PageOptions) => {
        active.value = pageOption
    }

    return {active, setPage}
})