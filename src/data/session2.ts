import { PartModel, SessionItem } from "../types/session";

const session: SessionItem = {
    id: '2',
    day: "",
    name: "Afternoon Session",
    parts: []
}

const parts: PartModel[] = [
    {
        outline: "6",
        speaker: "",
        start: "",
        time: 9,
        title: "Experiences"
    },
    {
        outline: "7",
        speaker: "",
        start: "",
        time: 29,
        title: "Summary of the Watchtower"
    },
    {
        outline: "8",
        speaker: "",
        start: "",
        time: 14,
        title: "SYMPOSIUM: “We Are Not Ashamed of...” - God's Moral Standards"
    },
    {
        outline: "9",
        speaker: "",
        start: "",
        time: 14,
        title: "SYMPOSIUM: “We Are Not Ashamed of...” - God's Kingdom"
    },
    {
        outline: "10",
        speaker: "",
        start: "",
        time: 14,
        title: "SYMPOSIUM: “We Are Not Ashamed of...” - God's Representatives"
    },
    {
        outline: "11",
        speaker: "",
        start: "",
        time: 44,
        title: "Boast in Jehovah"
    }

]

session.parts = parts

export default session