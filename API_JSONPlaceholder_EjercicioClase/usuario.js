import { URL } from "./env.js";
import { solicitar } from "./solicitudes.js";

export const obtenerUsuario = (id) => solicitar(`${URL}/users/${id}`);