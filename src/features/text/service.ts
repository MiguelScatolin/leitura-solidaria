import { httpClient } from "../../shared/http";
import { Text } from "./types";

export const postText = (text: Text, file: Blob) => {
    var formData = new FormData();
    formData.append('Title', text.title);
    formData.append('Type', text.type.toString());
    formData.append('File', file);
    return httpClient.post<Text>("texts", formData, {headers: {
        'content-type': 'multipart/form-data'
    }})
};
