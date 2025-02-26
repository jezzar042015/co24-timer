<template>
    <div id="timer" @click="showControls" :class="timerClass">
        <div id="speakers" v-show="timerStore.controls"
            class="flex flex-col gap-2 absolute left-0 h-full w-full md:w-80 bg-black/50 text-zinc-50 pl-4 pr-2 pt-4 pb-2 shadow-xl">
            <div class="flex justify-between uppercase pl-2 ">
                <div>{{ partStore.parts.name }}</div>
                <div @click="gotoHome" class="pr-3">
                    <IconDashboard class="h-5 opacity-45 hover:opacity-70 cursor-pointer" />
                </div>
            </div>
            <hr>
            <PartsList />
            <div class="md:hidden p-3 bg-red-500/40 rounded-sm text-sm">
                Note: Use bigger screens to use the timer!
            </div>
        </div>

            <TimerDigits class="hidden md:flex" />
            <TimerControls v-show="timerStore.controls" class="hidden md:flex"/>
    </div>
</template>

<script setup lang="ts">
    // import { computed } from 'vue'
    import { usePageStore } from '../stores/pages';
    import { usePartsStore } from '../stores/parts';
    import { useTimerStore } from '../stores/timer';
    import PartsList from './PartsList.vue';
    import TimerControls from './TimerControls.vue';
    import TimerDigits from './TimerDigits.vue';
    import IconDashboard from '../assets/icons/IconDashboard.vue'
    import { computed } from 'vue';

    const partStore = usePartsStore()
    const pageStore = usePageStore()
    const timerStore = useTimerStore()

    const timerClass = computed(() => {
        if (!partStore.activePart) return defaultTimerClass()

        const limit = partStore.activePart.time * 60
        const cushion = limit - 60

        if (timerStore.seconds >= cushion && timerStore.seconds < limit) {
            return warningTimerClass()
        } else if (timerStore.seconds >= limit) {
            return overtimeTimerClass()
        }
        return defaultTimerClass()
    })

    const defaultTimerClass = () =>
        'h-screen w-full bg-black flex flex-col items-center justify-center relative overflow-hidden'

    const overtimeTimerClass = () =>
        'h-screen w-full bg-red-500 flex flex-col items-center justify-center relative overflow-hidden'

    const warningTimerClass = () =>
        'h-screen w-full bg-orange-400 flex flex-col items-center justify-center relative overflow-hidden'

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