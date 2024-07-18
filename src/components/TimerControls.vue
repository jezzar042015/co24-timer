<template>
    <div id="controls" class="flex gap-2">
        <template v-if="!timerStore.running">
            <button @click.stop="start" class="text-zinc-50 bg-white/10 p-3 hover:bg-white/20 rounded-sm">Start</button>
            <button @click.stop="reset" class="text-zinc-50 bg-white/10 p-3 hover:bg-white/20 rounded-sm">Reset</button>
        </template>
        <template v-else>
            <button @click="stop" class="text-zinc-50 bg-white/10 p-3 hover:bg-white/20 rounded-sm">Stop</button>
        </template>
    </div>
</template>

<script setup lang="ts">
    import { useTimerStore } from '../stores/timer';

    const timerStore = useTimerStore()

    function start() {
        timerStore.start()
        timerStore.hideControls()
    }

    function stop() {
        timerStore.stop()
    }

    function reset() {
        timerStore.reset()
    }

</script>
