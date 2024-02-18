import { pt } from "./pt.json";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "pt",
  messages: {
    pt,
    en: {
      textoVideos: "My videos",
      textoFavoritos: "My favorites",
      textoBotaoFavorito: "Add Favorite",
      textoDescricao: "Description",
      textoAdicionarVideos: "Add Videos",     
      textoEnviar: "Send"       
    },
  },
}));