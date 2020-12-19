export enum TextType {
    Literature,
    Academic,
}

export interface Text {
    guid: number;
    name: string;
    authors: string[];
    edition?: number;
    language: string;
    type: TextType;
    hasImages: boolean;
}
