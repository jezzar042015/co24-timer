import { PartModel, SessionItem } from "../types/session";

const session: SessionItem = {
    id: '6',
    day: "Sunday",
    name: "Sunday Afternoon",
    parts: []
}

const parts: PartModel[] = [
    {
        outline: "48",
        speaker: "Dean Jacek",
        start: "02:40",
        time: 49,
        title: “Hold Firmly to the Good News”​—Why and How?"
    }
]

session.parts = parts

export default session