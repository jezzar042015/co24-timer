<template>
    <div class="flex items-center -m-10 select-none">
        <div v-show="!isLessAnHour" class="courier-prime-regular digit text-zinc-50">
            {{ onesDigitOfHours }}
        </div>
        <div v-show="!isLessAnHour" class="courier-prime-regular separator text-zinc-50">:</div>
        <div class="courier-prime-regular digit text-zinc-50">
            {{ tensDigitOfMinutes }}
        </div>
        <div class="courier-prime-regular digit text-zinc-50">
            {{ onesDigitOfMinutes }}
        </div>
        <div class="courier-prime-regular separator text-zinc-50">:</div>
        <div class="courier-prime-regular digit text-zinc-50">
            {{ tensDigitOfSeconds }}
        </div>
        <div class="courier-prime-regular digit text-zinc-50">
            {{ onesDigitOfSeconds }}
        </div>
    </div>
</template>

<script setup lang="ts">
    import { computed, ref } from 'vue';
    import { useTimerStore } from '../stores/timer';

    const isLessAnHour = ref(true)
    const timerStore = useTimerStore()

    const onesDigitOfHours = computed(() => {
        const hours = Math.floor(Math.round(timerStore.seconds) / 3600);
        const onesDigit = hours % 10;
        return onesDigit;
    })

    const tensDigitOfMinutes = computed(() => {
        const minutes = Math.floor((Math.round(timerStore.seconds) % 3600) / 60);
        const tensDigit = Math.floor(minutes / 10);
        return tensDigit;
    })

    const onesDigitOfMinutes = computed(() => {
        const minutes = Math.floor((Math.round(timerStore.seconds) % 3600) / 60);
        const onesDigit = minutes % 10;
        return onesDigit;
    })

    const tensDigitOfSeconds = computed(() => {
        const seconds = Math.round(timerStore.seconds) % 60;
        const tensDigit = Math.floor(seconds / 10);
        return tensDigit;
    })

    const onesDigitOfSeconds = computed(() => {
        const seconds = Math.round(timerStore.seconds) % 60;
        const onesDigit = seconds % 10;
        return onesDigit;
    })

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
