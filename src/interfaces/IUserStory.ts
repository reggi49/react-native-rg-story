export interface IUserStory {
    id: number,
    avatar: string,
    toko: string,
    images: IUserStoryItem[]
}

export interface IUserStoryItem {
    id: number,
    toko: string,
    onPress?: any,
    description?: string,
}
