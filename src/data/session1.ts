import { PartModel, SessionItem } from "../types/session";

const session: SessionItem = {
    id: "1",
    day: "",
    name: "Morning Session",
    parts: []
}

const parts: PartModel[] = [
    {
        outline: "1",
        speaker: "",
        start: "10:00",
        time: 14,
        title: "We Are “Not Ashamed of the Good News”​—Why?"
    },
    {
        outline: "2",
        speaker: "",
        start: "",
        time: 14,
        title: "Taking a Stand for the Good News"
    },
    {
        outline: "3",
        speaker: "",
        start: "",
        time: 24,
        title: "Be “a Workman With Nothing to Be Ashamed Of“"
    },
    {
        outline: "4",
        speaker: "",
        start: "",
        time: 29,
        title: "Showing the Spirit of Power, Love and Soundness of Mind"
    },
    {
        outline: "5",
        speaker: "",
        start: "",
        time: 29,
        title: "Baptism: Continue to Be “Submissive to the Good News“"
    },
]

session.parts = parts

export default session;