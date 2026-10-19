import { obtenerPublicaciones } from "./publicaciones.js";
import { obtenerUsuario } from "./usuario.js";

const identificador = 8;

const obtenerUsuarioConComentarios = async (id) => {
 const usuario = await obtenerUsuario(id);
 const publicaciones = await obtenerPublicaciones(usuario.id);

	return {
		usuario: usuario.name,
	publicaciones
	};
};

try {
	const resultado = await obtenerUsuarioConComentarios(identificador);
	console.dir({ ...resultado }, { depth: null });
} catch (error) {
	console.error("No se pudieron obtener los datos:", error.message);
	process.exitCode = 1;
}