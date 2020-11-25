import { Usuario } from "./service";

export const ordenaUsuariosEmOrdemAfabetica = (usuarios: Array<Usuario>) => {
  return usuarios.sort((a, b) => (a.nome > b.nome ? -1 : 1));
};
