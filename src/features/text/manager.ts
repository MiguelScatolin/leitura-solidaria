import { postText } from "./service";
import { Text } from "./types";

export const registerText = async (text: Text, file: Blob) => {
	const response = await postText(text, file);
	return response.data;
};
