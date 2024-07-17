export interface SessionItem {
    id: string
    name: string
    day: string
    parts: PartModel[]
}

export interface PartModel {
    outline: string
    time: number
    speaker: string
    start: string
    title: string
}

export interface TimerStorageModel {
    id: string,
    time: number
}