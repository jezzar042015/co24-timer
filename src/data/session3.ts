import { PartModel, SessionItem } from "../types/session";

const session: SessionItem = {
    id: '3',
    day: "",
    name: "Special Pioneers Meeting",
    parts: []
}

const parts: PartModel[] = [
    {
        outline: "1",
        speaker: "",
        start: "",
        time: 10,
        title: "”Go...Make Disciples”"
    },
    {
        outline: "2",
        speaker: "",
        start: "",
        time: 20,
        title: "Symposium: Prepare Your Heart to Make Disciples - Develop Confidence and Commitment"
    },
    {
        outline: "3",
        speaker: "",
        start: "",
        time: 20,
        title: "Symposium: Prepare Your Heart to Make Disciples - Make Bible Studies a Matter of Prayer"
    },
    {
        outline: "4",
        speaker: "",
        start: "",
        time: 20,
        title: "Symposium: Prepare Your Heart to Make Disciples - Remain Optimistic"
    },
    {
        outline: "5",
        speaker: "",
        start: "",
        time: 15,
        title: "Giving Attention to the Needs of the Pioneers"
    },
    {
        outline: "6",
        speaker: "",
        start: "",
        time: 20,
        title: "Symposium: Practical Suggestion for Starting Bible Studies - The Direct Approach"
    },
    {
        outline: "7",
        speaker: "",
        start: "",
        time: 20,
        title: "Symposium: Practical Suggestion for Starting Bible Studies - Referrals and Meeting Attenders"
    },
    {
        outline: "8",
        speaker: "",
        start: "",
        time: 20,
        title: "Symposium: Practical Suggestion for Starting Bible Studies - Those Whom We Already Know"
    },
    {
        outline: "9",
        speaker: "",
        start: "",
        time: 15,
        title: "Jehovah Can Give You the Desire and the Power"
    },
]

session.parts = parts

export default session