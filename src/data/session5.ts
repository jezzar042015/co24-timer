import { PartModel, SessionItem } from "../types/session";

const session: SessionItem = {
    id: '5',
    day: "Sunday",
    name: "Sunday Morning",
    parts: []
}

const parts: PartModel[] = [
    {
        outline: "38",
        speaker: "",
        start: "00:00",
        time: 14,
        title: "Imitate Those Who Had Faith in the Good News (Symposium)​—Zechariah"
    },
    {
        outline: "39",
        speaker: "",
        start: "00:00",
        time: 13,
        title: "Imitate Those Who Had Faith in the Good News (Symposium)—Elizabeth"
    },
    {
        outline: "40",
        speaker: "",
        start: "00:00",
        time: 13,
        title: "Imitate Those Who Had Faith in the Good News (Symposium)—Mary"
    },
    {
        outline: "41",
        speaker: "",
        start: "00:00",
        time: 13,
        title: "Imitate Those Who Had Faith in the Good News (Symposium)—Joseph"
    },
    {
        outline: "42",
        speaker: "",
        start: "00:00",
        time: 13,
        title: "Imitate Those Who Had Faith in the Good News (Symposium)—Simeon and Anna"
    },
    {
        outline: "43",
        speaker: "",
        start: "00:00",
        time: 15,
        title: "Imitate Those Who Had Faith in the Good News (Symposium)—Jesus"
    },
    {
        outline: "44",
        speaker: "",
        start: "00:00",
        time: 29,
        title: "Public Bible Discourse: Why We Don’t Fear Bad News"
    },
    {
        outline: "45",
        speaker: "",
        start: "00:00",
        time: 29,
        title: "Summary of The Watchtower"
    }
]

session.parts = parts

export default session