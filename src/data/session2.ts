import { PartModel, SessionItem } from "../types/session";

const session: SessionItem = {
    id: '2',
    day: "",
    name: "Afternoon Session",
    parts: []
}

const parts: PartModel[] = [
    {
        outline: "8",
        speaker: "",
        start: "",
        time: 29,
        title: "Public Bible Discourse: Why Do You Believe What You Believe?"
    },
    {
        outline: "9",
        speaker: "",
        start: "",
        time: 29,
        title: "Summary of the Watchtower"
    },
    {
        outline: "10",
        speaker: "",
        start: "",
        time: 15,
        title: "SYMPOSIUM: “We Recommend Ourselves as God’s Ministers, by ...” - Endurance"
    },
    {
        outline: "11",
        speaker: "",
        start: "",
        time: 14,
        title: "SYMPOSIUM: “We Recommend Ourselves as God’s Ministers, by ...” - Kindness"
    },
    {
        outline: "12",
        speaker: "",
        start: "",
        time: 14,
        title: "SYMPOSIUM: “We Recommend Ourselves as God’s Ministers, by ...” - Honesty"
    },
    {
        outline: "13",
        speaker: "",
        start: "",
        time: 29,
        title: "How Are You Being Trained?"
    }

]

session.parts = parts

export default session