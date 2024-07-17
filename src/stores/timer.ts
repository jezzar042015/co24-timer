import { defineStore } from "pinia";
import { ref } from "vue";
import { TimerStorageModel } from "../types/session";
import { usePartsStore } from "./parts";

export const useTimerStore = defineStore('timer', () => {
    const running = ref(false)
    const controls = ref(true)
    const intervalId = ref(0)
    const timers = ref<TimerStorageModel[]>([])
    const seconds = ref(0)

    const partStore = usePartsStore()

    function showControls() {
        controls.value = true
    }

    function hideControls(delay: number = 3000) {

        intervalId.value = setInterval(() => {
            if (running.value) {
                controls.value = false
            }
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
            timerItem.id = id
            timerItem.time = seconds.value
        }

        localStore()
    }

    function setStorage() {
        timers.value = []

        for (const p of partStore.parts.parts) {
            const t = {
                id: p.outline,
                time: 0
            }
            timers.value.push(t)
        }

        localStore()
    }

    function localStore() {
        const session = `session${partStore.parts.id}`
        localStorage.setItem(session, JSON.stringify(timers.value))
    }

    function loadStorage() {
        const session = `session${partStore.parts.id}`
        const storageParts = localStorage.getItem(session)

        if (!storageParts) {
            setStorage()
        } else {
            timers.value = JSON.parse(storageParts)

            if (timers.value.length !== partStore.parts.parts.length) {
                setStorage()
            }
        }
    }


    return {
        running, controls, seconds,
        showControls, hideControls,
        loadStorage, setStorage,
        setPartRuntime, loadRunTime
    }
})