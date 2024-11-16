<template>
    <div class="bg-black/90">
        <div class="pt-12 px-24 h-screen max-w-5xl min-w-3xl m-auto shadow-xl shadow-white/5">
            <div>
                <h1 class="text-4xl font-bold text-white">“Behave in a Manner Worthy of the Good News”</h1>
                <h2 class="text-2xl text-gray-600">2024-2025 Circuit Assembly Program With Circuit Overseer</h2>
            </div>
            <div class="mt-3 flex flex-col gap-2">
                <div class="p-4 cursor-pointer text-white/70 hover:bg-white/10" @click="loadSession('session1')">Morning Session</div>
                <div class="p-4 cursor-pointer text-white/70 hover:bg-white/10" @click="loadSession('session2')">Afternoon Session</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { usePageStore } from '../stores/pages';
    import { usePartsStore } from '../stores/parts';

    const partStore = usePartsStore()
    const pageStore = usePageStore()

    function loadSession(sessionName: string) {
        partStore.loadSession(sessionName)
        pageStore.setPage('timer')
    }
</script>