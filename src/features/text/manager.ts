import { postText } from "./service";
import { Text } from "./types";

export const registerText = async (text: Text) => {
    const response = await postText(text);
    return response.data;
};
