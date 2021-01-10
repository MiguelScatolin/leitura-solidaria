export enum TextType {
	Artigo = 1,
	Monografia = 2,
	Literatura = 3,
	Outro = 4,
}

export interface Text {
	guid: number;
	title: string;
	authors: string[];
	edition?: number;
	language: string;
	type: TextType;
	hasImages: boolean;
}
