import { Video } from "~/interfaces/video";
import { sql } from '~~/server/db';
import { H3Event } from "h3"; // Importando a lib H3 Event

export const buscaVideos = async () => {  
  const resultado = await sql({
    query: "SELECT * FROM videos ORDER BY descricao ASC"
  });

  return resultado as Video[];
};

export const buscaVideoPorId = async (event: H3Event) => {
  const requestId = (await event.context.params?.id) as string;

  const resultado = (await sql({
    query: "SELECT * FROM videos where id = ?",
    values: [requestId]
  })) as any;

  return resultado[0] as Video;
};

export const adicionaVideo = async (event: H3Event): Promise<string> => {
  try {
    const request = await readBody(event); // Saber de onde é esse método e o que ele faz

    const resultado = (await sql({
      query: `INSERT INTO videos (descricao, url, data_postagem) VALUES (?, ?, CURRENT_DATE())`,
      values: [request.descricao, request.url]       
    })) as any;

    return "Vídeo adicionado com sucesso!";
  } catch (error) {    
    throw createError({  // Esse create error é da biblioteca H3
      statusCode: 500,
      name: "Erro ao criar vídeo",
    });
  }
};

export const atualizaVideo = async (event: H3Event): Promise<string> => {
  try {
    const request = await readBody(event); // Método do H3

    await sql({
      query: `UPDATE videos SET descricao = ?, url = ?, data_postagem = CURRENT_DATE WHERE id = ?`,
      values: [request.descricao, request.url, request.id]     
    });

    return "Vídeo atualizado com sucesso!";
  } catch (error) {
    throw createError({
      statusCode: 500,
      name: "Erro ao atualizar vídeo",
    });
  }
};

export const deletaVideo = async (event: H3Event) => {
  try {
    const requestId = (await event.context.params?.id) as string;
    const resultado = await sql({
      query: "DELETE FROM videos WHERE id = ?",
      values: [requestId],
    });

    return "Video deletado com sucesso!";
  } catch (error) {
    throw createError({
      statusCode: 500,
      name: "Erro ao deletar vídeo",
    });
  }
};