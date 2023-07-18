export interface SubLevel {
    id: string;
    name: string;
}

export interface MidLevel {
    id: string;
    name: string;
    subLevels: SubLevel[];
}

export interface TopLevel {
    id: string;
    name: string;
    midLevels: MidLevel[];
}