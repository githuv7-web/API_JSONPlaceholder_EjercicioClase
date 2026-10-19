export const formatearComentarios = (comentarios) =>
    comentarios.map(({ name, email, body }) => ({ name, email, body }));