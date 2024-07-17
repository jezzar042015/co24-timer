import { defineStore } from "pinia";
import { ref } from "vue";
import { PartModel, SessionItem, TimerStorageModel } from "../types/session";
import session1 from "../data/session1";
import session2 from "../data/session2";
import session3 from "../data/session3";
import session4 from "../data/session4";
import session5 from "../data/session5";
import session6 from "../data/session6";

export const usePartsStore = defineStore('parts', () => {
    const parts = ref<SessionItem>(session1)
    const activePart = ref<PartModel>()

    function setActivePart(part: PartModel) {
        activePart.value = part
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
            case 'session4':
                parts.value = session4
                break;
            case 'session5':
                parts.value = session5
                break;
            case 'session6':
                parts.value = session6
                break;
            default:
                break;
        }
    }

    return { parts, activePart, loadSession, setActivePart,  }
})