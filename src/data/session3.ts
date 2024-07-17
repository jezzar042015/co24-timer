import { PartModel, SessionItem } from "../types/session";

const session: SessionItem = {
    id: '3',
    day: "Saturday",
    name: "Saturday Morning",
    parts: []
}

const parts: PartModel[] = [
    {
        outline: "20",
        speaker: "Jepte Famat",
        start: "00:00",
        time: 11,
        title: "Messianic Prophecy Fulfilled! (Symposium)​—Preceded by a Messenger"
    },
    {
        outline: "21",
        speaker: "Keno Dagalea",
        start: "00:00",
        time: 9,
        title: "Messianic Prophecy Fulfilled! (Symposium)​—Born to a Virgin"
    },
    {
        outline: "22",
        speaker: "Benjamin Dela Cruz",
        start: "00:00",
        time: 9,
        title: "Messianic Prophecy Fulfilled! (Symposium)—Born in Bethlehem"
    },
    {
        outline: "23",
        speaker: "David Dinawanao",
        start: "00:00",
        time: 9,
        title: "Messianic Prophecy Fulfilled! (Symposium)—Protected as a Child"
    },
    {
        outline: "24",
        speaker: "Samuel Dela Cruz",
        start: "00:00",
        time: 9,
        title: "Messianic Prophecy Fulfilled! (Symposium)—Called a Nazarene"
    },
    {
        outline: "25",
        speaker: "Michael Waniwan",
        start: "00:00",
        time: 15,
        title: "Messianic Prophecy Fulfilled! (Symposium)—Arrived at the Appointed Time"
    },
    {
        outline: "26",
        speaker: "Rolly Santa Maria",
        start: "00:00",
        time: 29,
        title: "Baptism: Continue to Be “Submissive to the Good News”"
    }
]

session.parts = parts

export default session