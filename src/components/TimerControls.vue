<template>
    <div id="controls" class="flex gap-2">
        <template v-if="!timerStore.running">
            <button @click.stop="start" class="text-zinc-50 bg-white/10 p-3 hover:bg-white/20 rounded-sm">Start</button>
        </template>
        <template v-else>
            <button @click="stop" class="text-zinc-50 bg-white/10 p-3 hover:bg-white/20 rounded-sm">Stop</button>
            <button class="text-zinc-50 bg-white/10 p-3 hover:bg-white/20 rounded-sm">Restart</button>
        </template>
    </div>
</template>

<script setup lang="ts">
    import { usePartsStore } from '../stores/parts';
    import { useTimerStore } from '../stores/timer';

    const timerStore = useTimerStore()
    const partStore = usePartsStore()

    function start() {
        timerStore.running = true
        timerStore.hideControls()
    }

    function stop() {
        if (partStore.activePart) {
            timerStore.setPartRuntime(partStore.activePart.outline)
        }
        timerStore.running = false

    }
</script>
