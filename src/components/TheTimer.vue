<template>
    <div id="timer" @click="showControls"
        class="h-screen w-full bg-black flex flex-col items-center justify-center relative overflow-hidden">
        <div id="speakers" v-show="timerStore.controls"
            class="flex flex-col gap-2 absolute left-0 h-full w-80 bg-black/50 text-zinc-50 pl-4 pr-2 pt-4 pb-2 shadow-xl">
            <div class="flex justify-between uppercase pl-2 ">
                <div>{{ partStore.parts.name }}</div>
                <div @click="gotoHome" class="pr-3">
                    <IconDashboard class="h-5 opacity-45 hover:opacity-70 cursor-pointer" />
                </div>
            </div>
            <hr>
            <PartsList />
        </div>

        <TimerDigits />
        <TimerControls v-show="timerStore.controls" />
    </div>
</template>

<script setup lang="ts">
    import { computed } from 'vue'
    import { usePageStore } from '../stores/pages';
    import { usePartsStore } from '../stores/parts';
    import { useTimerStore } from '../stores/timer';
    import PartsList from './PartsList.vue';
    import TimerControls from './TimerControls.vue';
    import TimerDigits from './TimerDigits.vue';
    import IconDashboard from '../assets/icons/IconDashboard.vue'

    const partStore = usePartsStore()
    const pageStore = usePageStore()
    const timerStore = useTimerStore()

    // const warning = computed(()=> {
    //     return true
    // })

    function gotoHome() {
        pageStore.setPage('home')
    }

    function showControls() {
        timerStore.showControls()
    }
</script>

<style>


    ::-webkit-scrollbar
    {
        width: .5em;
    }

    ::-webkit-scrollbar-track
    {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }

    ::-webkit-scrollbar-thumb
    {
        background-color: rgba(169, 169, 169, 0.322);
        outline: 1px solid rgba(112, 128, 144, 0.158);
    }
</style>