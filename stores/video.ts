import { type Video } from "~/interfaces/video" // Importando interface

export const useVideoStore = defineStore("videos", () => { // Definimos o nome da store ("videos")
  // State
  const favoritos = ref<Video[]>([])

  // Actions

  const adicionarFavorito = (video: Video) => {
    const favoritosFiltrados = favoritos.value.some((v) => v.id === video.id)
    if (!favoritosFiltrados)
      favoritos.value.push(video)
  }

  const deletarFavorito = (id: Number) => {
    const favoritosFiltrados = favoritos.value.filter((v) => v.id !== id)
    favoritos.value = favoritosFiltrados
  }

  return { adicionarFavorito, deletarFavorito, favoritos }
}, { persist: {
      storage: persistedState.localStorage // Se quiséssemos session storage, era só trocar "localStorage" por "sessionStorage"
    } 
})