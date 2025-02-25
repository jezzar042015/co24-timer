<template>
    <div class="bg-black/90">
        <div class="p-5 md:pt-12 md:px-24 h-screen max-w-5xl min-w-3xl m-auto shadow-xl shadow-white/5">
            <div class="pt-8">
                <h1 class="text-2xl md:text-5xl font-bold text-white py-3">
                    “Not Ashamed of the Good News”
                </h1>
                <h2 class="text-md md:text-2xl text-white/50">
                    2024-2025 Circuit Assembly Program With Branch Representative
                </h2>
            </div>
            <div class="mt-10 md:mt-24 grid grid-cols-2 gap-10">
                <div v-for="session in sessions" :key="session.id" @click="loadSession(session.id)"
                    class="p-4 cursor-pointer rounded-md text-2xl text-white/70 bg-white/5 hover:bg-white/10  shadow-white/10 hover:shadow min-h-[150px]">
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
            id: 'session1', display: "CABR - Morning Session"
        },
        {
            id: 'session2', display: "CABR - Afternoon Session"
        }
        ,
        {
            id: 'session3', display: "Special Pioneers Meeting"
        }
    ])

    function loadSession(sessionName: string) {
        partStore.loadSession(sessionName)
        pageStore.setPage('timer')
    }
</script>