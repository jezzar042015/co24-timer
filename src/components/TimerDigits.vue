<template>
    <div class="flex items-center -m-10">
        <div v-show="!isLessAnHour" class="courier-prime-regular digit text-zinc-50">0</div>
        <div v-show="!isLessAnHour" class="courier-prime-regular separator text-zinc-50">:</div>
        <div class="courier-prime-regular digit text-zinc-50">0</div>
        <div class="courier-prime-regular digit text-zinc-50">0</div>
        <div class="courier-prime-regular separator text-zinc-50">:</div>
        <div class="courier-prime-regular digit text-zinc-50">0</div>
        <div class="courier-prime-regular digit text-zinc-50">0</div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const isLessAnHour = ref(true)

</script>

<style scoped>
    .digit
    {
        font-size: 21vw;
        font-weight: 600;
        margin-left: -15px
    }

    .separator
    {
        font-size: 9vw;
        margin-left: -15px
    }
</style>
