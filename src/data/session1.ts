import { PartModel, SessionItem } from "../types/session";

const session: SessionItem = {
    id: "1",
    day: "Friday",
    name: "Friday Morning",
    parts: []
}

const parts: PartModel[] = [
    {
        outline: "1",
        speaker: "Jesrel Segovia",
        start: "09:40",
        time: 30,
        title: "Chairman’s Address: Why Do We Need Good News?"
    },
    {
        outline: "3",
        speaker: "Abner Presas",
        start: "10:55",
        time: 18,
        title: "\"They Were Moved by Holy Spirit\" (Symposium) — Matthew"
    },
    {
        outline: "4",
        speaker: "Seth Nono",
        start: "11:14",
        time: 17,
        title: "\"They Were Moved by Holy Spirit\" (Symposium) — Mark"
    },
    {
        outline: "5",
        speaker: "Daryl Pentojo",
        start: "11:32",
        time: 17,
        title: "\"They Were Moved by Holy Spirit\" (Symposium) — Luke"
    },
    {
        outline: "6",
        speaker: "Zuriel Ruaya",
        start: "11:50",
        time: 19,
        title: "\"They Were Moved by Holy Spirit\" (Symposium) — John"
    }
]

session.parts = parts

export default session;