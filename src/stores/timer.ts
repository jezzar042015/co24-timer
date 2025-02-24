import { defineStore } from "pinia";
import { ref } from "vue";
import { TimerStorageModel } from "../types/session";
import { usePartsStore } from "./parts";

export const useTimerStore = defineStore('timer', () => {
    const running = ref(false)
    const controls = ref(true)
    const timeoutId = ref(0) // Renamed from intervalId
    const timerInterval = ref(0)
    const baseDateTime = ref<Date>(new Date(0))
    const timers = ref<TimerStorageModel[]>([])
    const seconds = ref(0)

    const partStore = usePartsStore()

    function start() {
        const storedSeconds = seconds.value
        running.value = true
        baseDateTime.value = new Date()
        timerInterval.value = setInterval(() => {
            const currentTs = new Date().getTime()
            const baseTs = baseDateTime.value.getTime()
            const timeDiff = Math.abs(currentTs - baseTs)
            seconds.value = (timeDiff / 1000) + storedSeconds
        }, 100) // Adjust to 1000 if less precision is okay
    }

    function stop() {
        if (partStore.activePart) {
            running.value = false
            clearInterval(timerInterval.value)
            setPartRuntime(partStore.activePart.outline)
        }
    }

    function reset() {
        if (partStore.activePart) {
            const activePartId = partStore.activePart.outline
            const timerItem = timers.value.find(t => t.id == activePartId)
            if (!timerItem) return
            timerItem.time = 0
            seconds.value = 0
            localStore()
        }
    }

    function showControls() {
        controls.value = true
        clearTimeout(timeoutId.value)
        hideControls()
    }

    function hideControls(delay: number = 3000) {
        timeoutId.value = setTimeout(() => {
            if (running.value)
                controls.value = false
        }, delay)
    }

    function loadRunTime(id: string) {
        const timerItem = timers.value.find(t => t.id == id)
        if (timerItem) {
            seconds.value = timerItem.time
        } else {
            seconds.value = 0
            timers.value.push({ id, time: 0 })
        }
    }

    function setPartRuntime(id: string) {
        const timerItem = timers.value.find(t => t.id == id)
        if (timerItem) {
            timerItem.time = Math.round(seconds.value * 100) / 100
        }
        localStore()
    }

    function localStore() {
        const session = `session${partStore.parts.id}`
        localStorage.setItem(session, JSON.stringify(timers.value))
    }

    function initializeStorage() {
        const session = `session${partStore.parts.id}`
        const storageParts = localStorage.getItem(session)
        if (storageParts) {
            timers.value = JSON.parse(storageParts)
            if (timers.value.length !== partStore.parts.parts.length) {
                timers.value = partStore.parts.parts.map(p => ({ id: p.outline, time: 0 }))
                localStore()
            }
        } else {
            timers.value = partStore.parts.parts.map(p => ({ id: p.outline, time: 0 }))
            localStore()
        }
    }

    return {
        running, controls, seconds,
        showControls, hideControls,
        initializeStorage, // Replaces loadStorage and setStorage
        setPartRuntime, loadRunTime,
        start, stop, reset
    }
})