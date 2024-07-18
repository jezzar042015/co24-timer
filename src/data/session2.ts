import { PartModel, SessionItem } from "../types/session";

const session: SessionItem = {
    id: '2',
    day: "Friday",
    name: "Friday Afternoon",
    parts: []
}

const parts: PartModel[] = [
    {
        outline: "7",
        speaker: "Mark Lou Mejias",
        start: "01:50",
        time: 13,
        title: "Believe the Truth About Jesus (Symposium)​—The Word"
    },
    {
        outline: "8",
        speaker: "Jazer Cajes",
        start: "01:50",
        time: 11,
        title: "Believe the Truth About Jesus (Symposium)—His Name"
    },
    {
        outline: "9",
        speaker: "Jeriel Sarin",
        start: "01:50",
        time: 13,
        title: "Believe the Truth About Jesus (Symposium)​—His Birth"
    },
    {
        outline: "10",
        speaker: "Jezreel Tan",
        start: "01:50",
        time: 13,
        title: "Lessons From the Land of Jesus (Symposium)​—Geography"
    },
    {
        outline: "11",
        speaker: "Argeo Sincoñegue",
        start: "01:50",
        time: 13,
        title: "Lessons From the Land of Jesus (Symposium)—Animals"
    },
    {
        outline: "12",
        speaker: "Jearve Dy",
        start: "01:50",
        time: 12,
        title: "Lessons From the Land of Jesus (Symposium)—Food"
    },
    {
        outline: "13",
        speaker: "Giovanni Almachar",
        start: "01:50",
        time: 13,
        title: "Lessons From the Land of Jesus (Symposium)—Homelife"
    },
    {
        outline: "14",
        speaker: "Leo Mar Tubaga",
        start: "01:50",
        time: 13,
        title: "Lessons From the Land of Jesus (Symposium)—Community"
    },
    {
        outline: "15",
        speaker: "Roys Manzanares",
        start: "01:50",
        time: 12,
        title: "Lessons From the Land of Jesus (Symposium)—Education"
    },
    {
        outline: "16",
        speaker: "Edwin Mallorca",
        start: "00:00",
        time: 14,
        title: "Lessons From the Land of Jesus (Symposium)—Worship"
    },
    {
        outline: "17",
        speaker: "Dean Jacek",
        start: "00:00",
        time: 34,
        title: "“Everlasting Good News”​—In What Sense?"
    },

]

session.parts = parts

export default session