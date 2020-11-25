import { httpClient } from "../../shared/http";

export interface Usuario {
  id: number;
  nome: string;
}

export const obterUsuarios = () => httpClient.get<Array<Usuario>>("usuario");
