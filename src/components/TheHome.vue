<template>
    <div class="pt-12 px-24 h-screen max-w-5xl min-w-3xl m-auto shadow-xl">
        <div>
            <h1 class="text-4xl font-bold text-gray-600">"Declare the Good News!"</h1>
            <h2 class="text-2xl text-gray-600">2024 Convention of Jehovah’s Witnesses</h2>
        </div>
        <div class="mt-3 flex flex-col gap-2">
            <div class="p-4 cursor-pointer hover:bg-gray-100" @click="loadSession('session1')">Friday Morning</div>
            <div class="p-4 cursor-pointer hover:bg-gray-100" @click="loadSession('session2')">Friday Afternoon</div>
            <div class="p-4 cursor-pointer hover:bg-gray-100" @click="loadSession('session3')">Saturday Morning</div>
            <div class="p-4 cursor-pointer hover:bg-gray-100" @click="loadSession('session4')">Saturday Afternoon</div>
            <div class="p-4 cursor-pointer hover:bg-gray-100" @click="loadSession('session5')">Sunday Morning</div>
            <div class="p-4 cursor-pointer hover:bg-gray-100" @click="loadSession('session6')">Sunday Afternoon</div>
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