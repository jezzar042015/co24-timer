import { PartModel, SessionItem } from "../types/session";

const session: SessionItem = {
    id: '5',
    day: "Sunday",
    name: "Sunday Morning",
    parts: []
}

const parts: PartModel[] = [
    {
        outline: "7",
        speaker: "Mark Lou Mejias",
        start: "01:50",
        time: 13,
        title: "Believe the Truth About Jesus (Symposium)​—The Word"
    }
]

session.parts = parts

export default session