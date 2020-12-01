import { postText, Text } from "./service";

export const registerText = async (text: Text) => {
    const response = await postText(text);
    return response.data;
};
