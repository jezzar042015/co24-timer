<template>
    <div class="bg-black/90">
        <div class="p-5 md:pt-12 md:px-24 h-screen max-w-5xl min-w-3xl m-auto shadow-xl shadow-white/5">
            <div>
                <h1 class="text-2xl md:text-4xl font-bold text-white">“Behave in a Manner Worthy of the Good News”</h1>
                <h2 class="text-md md:text-2xl text-gray-600">2024-2025 Circuit Assembly Program With Circuit Overseer
                </h2>
            </div>
            <div class="mt-10 md:mt-24 flex flex-col">
                <div v-for="session in sessions" :key="session.id" @click="loadSession(session.id)"
                    class="p-4 cursor-pointer text-white/70 hover:bg-white/10 first:border-t border-b border-dotted border-gray-500">
                    {{ session.display }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import { usePageStore } from '../stores/pages';
    import { usePartsStore } from '../stores/parts';

    const partStore = usePartsStore()
    const pageStore = usePageStore()

    const sessions = ref([
        {
            id: 'session1', display: "Morning Session"
        },
        {
            id: 'session2', display: "Afternoon Session"
        }
    ])

    function loadSession(sessionName: string) {
        partStore.loadSession(sessionName)
        pageStore.setPage('timer')
    }
</script>