<template>
    <div class="flex flex-col gap-1 overflow-auto">

        <PartItem v-for="part in parts" :key="part.outline" :part="part" />

    </div>
</template>

<script setup lang="ts">
    import { onMounted } from 'vue';
    import { usePartsStore } from '../stores/parts';
    import { PartModel } from '../types/session';
    import PartItem from './PartItem.vue';
    import { useTimerStore } from '../stores/timer';

    const partStore = usePartsStore()
    const timerStore = useTimerStore()
    const parts: PartModel[] = partStore.parts.parts

    onMounted(() => {
        if (partStore.parts.parts.length > 0) {
            if (partStore.activePart) {
                const partOutlines = partStore.parts.parts.map(p => p.outline)
                const isActiveOnList = partOutlines.includes(partStore.activePart.outline)
                if (isActiveOnList) return
            }

            const firstPart = partStore.parts.parts[0]
            partStore.setActivePart(firstPart)
            timerStore.loadStorage()
        }
    })
</script>
