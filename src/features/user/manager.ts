import * as service from "./service";
import { ordenaUsuariosEmOrdemAfabetica } from "./util";

export const getUsuario = async () => {
  const { data } = await service.obterUsuarios();
  return ordenaUsuariosEmOrdemAfabetica(data);
};
