<template>
    <div :class="style" @click="setActive">
        <div class="text-white/80 text-sm">{{ part.title }}</div>
        <div class="flex justify-between font-light">
            <span class="text-white/60 text-sm">{{ part.speaker }}</span>
            <span class="text-white/60 text-sm">{{ part.time }}m</span>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { computed } from 'vue';
    import { PartModel } from '../types/session';
    import { usePartsStore } from '../stores/parts';
    import { useTimerStore } from '../stores/timer';

    const partStore = usePartsStore()
    const timerStore = useTimerStore()

    const props = defineProps<{
        part: PartModel
    }>()

    const style = computed(() => {
        const defaultClass = 'p-2 cursor-pointer bg-white/5 hover:bg-white/10'
        const activeClass = 'p-2 cursor-pointer bg-white/15 hover:bg-white/15'
        if (!partStore.activePart) return defaultClass

        return (partStore.activePart.outline == props.part.outline)
            ? activeClass : defaultClass
    })

    function setActive() {
        if (timerStore.running) return
        partStore.setActivePart(props.part)
        
    }
</script>