import { httpClient } from "../../shared/http";
import { Text } from "./types";

export const postText = (text: Text) => httpClient.post<Text>("text");
