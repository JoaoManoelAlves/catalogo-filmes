type ImageType = {
    original: string
    medium: string
}

export type ShowsTypes = {
    id: number,
    url: string,
    name: string,
    type: string,
    language: string,
    genres: string[]
    image: ImageType,
    summary: string
}