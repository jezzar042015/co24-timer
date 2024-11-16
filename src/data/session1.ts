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
        title: "How Is the Good News Changing You?"
    },
    {
        outline: "2",
        speaker: "",
        start: "",
        time: 100,
        title: "SYMPOSIUM: How the Good News Influenced Their Life - Stephen"
    },
    {
        outline: "3",
        speaker: "",
        start: "",
        time: 100,
        title: "SYMPOSIUM: How the Good News Influenced Their Life - Philip"
    },
    {
        outline: "4",
        speaker: "",
        start: "",
        time: 100,
        title: "SYMPOSIUM: How the Good News Influenced Their Life - Aquila and Priscila"
    },
    {
        outline: "5",
        speaker: "",
        start: "",
        time: 100,
        title: "SYMPOSIUM: How the Good News Influenced Their Life - Titus"
    },
    {
        outline: "6",
        speaker: "",
        start: "",
        time: 19,
        title: "Continue in Your “Deeds of Godly Devotion”"
    },
    {
        outline: "7",
        speaker: "",
        start: "",
        time: 29,
        title: "Baptism: Continue to Be “Submissive to the Good News”"
    }

]

session.parts = parts

export default session;