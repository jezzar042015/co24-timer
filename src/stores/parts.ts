import { defineStore } from "pinia";
import { ref } from "vue";
import { PartModel, SessionItem, } from "../types/session";
import { useTimerStore } from "./timer";
import session1 from "../data/session1";
import session2 from "../data/session2";
import session3 from "../data/session3";

export const usePartsStore = defineStore('parts', () => {
    const timerStore = useTimerStore()
    const parts = ref<SessionItem>(session1)
    const activePart = ref<PartModel>()

    function setActivePart(part: PartModel) {
        activePart.value = part
        timerStore.loadRunTime(activePart.value.outline)
    }

    function loadSession(sessionName: string) {
        switch (sessionName) {
            case 'session1':
                parts.value = session1
                break;
            case 'session2':
                parts.value = session2
                break;

            case 'session3':
                parts.value = session3
                break;

            default:
                break;
        }
    }


    return { parts, activePart, loadSession, setActivePart, }
})