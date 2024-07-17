import { PartModel, SessionItem } from "../types/session";

const session: SessionItem = {
    id: '4',
    day: "Saturday",
    name: "Saturday Afternoon",
    parts: []
}

const parts: PartModel[] = [
    {
        outline: "27",
        speaker: "Milfred Wenceslao",
        start: "00:00",
        time: 11,
        title: "Use the Good News to Defeat Bad News (Symposium)​—Harmful Gossip"
    },
    {
        outline: "28",
        speaker: "Arnel Embodo",
        start: "00:00",
        time: 9,
        title: "Use the Good News to Defeat Bad News (Symposium)—A Troubled Conscience"
    },
    {
        outline: "29",
        speaker: "Nathaniel Campo",
        start: "00:00",
        time: 10,
        title: "Use the Good News to Defeat Bad News (Symposium)—Current Events"
    },
    {
        outline: "30",
        speaker: "Marlon Gentelizo",
        start: "00:00",
        time: 12,
        title: "Use the Good News to Defeat Bad News (Symposium)—Discouragement"
    },
    {
        outline: "31",
        speaker: "Millard Tuyac",
        start: "00:00",
        time: 13,
        title: "“Eager to Declare the Good News” (Symposium)​—Not the Work of Apostles Only"
    },
    {
        outline: "32",
        speaker: "Sotero Betalmos Jr",
        start: "00:00",
        time: 12,
        title: "“Eager to Declare the Good News” (Symposium)—An Act of Worship"
    },
    {
        outline: "33",
        speaker: "Joah Daal",
        start: "00:00",
        time: 12,
        title: "“Eager to Declare the Good News” (Symposium)—Be Ready With the Right Equipment"
    },
    {
        outline: "35",
        speaker: "Jay-ar Zonio",
        start: "00:00",
        time: 12,
        title: "Keep Preaching the Good News (Symposium)​—Wherever You Are"
    },
    {
        outline: "36",
        speaker: "Felix Calingacion",
        start: "00:00",
        time: 11,
        title: "Keep Preaching the Good News (Symposium)—Wherever God Directs"
    },
    {
        outline: "37",
        speaker: "Dean Jacek",
        start: "00:00",
        time: 34,
        title: "What Will You Do “for the Sake of the Good News”?"
    },
]

session.parts = parts

export default session