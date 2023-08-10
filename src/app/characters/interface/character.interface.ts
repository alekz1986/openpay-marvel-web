export interface CharacterDataWrapper {
    code: number;
    status: string;
    copyright: string;
    data: Pager;
}

export interface Pager {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Character[];
}

export interface Character {
    id: number;
    name: string;
    description: string;
    modified: string;
    thumbnail: CharacterThumbnail;
}

export interface CharacterThumbnail {
    path: string;
    extension: string;
}