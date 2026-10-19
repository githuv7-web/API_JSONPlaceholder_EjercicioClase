import { URL } from "./env.js";
import { formatearComentarios } from "./formateador.js";
import { solicitar } from "./solicitudes.js";

export const obtenerPublicaciones = async (usuarioId) => {
 const publicaciones = await solicitar(`${URL}/posts?userId=${usuarioId}`);

 return Promise.all(
  publicaciones.map(async (publicacion) => {
   const comentarios = await solicitar(
    `${URL}/comments?postId=${publicacion.id}`
   );

   return {
    titulo: publicacion.title,
    cuerpo: publicacion.body,
    comentarios: formatearComentarios(comentarios)
   };
  })
 );
};