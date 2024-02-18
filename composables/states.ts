import { type Video } from "@/interfaces/video"


// Abaixo, 'Video[]' (a interface que criamos) é o tipo do state 'favorito' é o nome do estado. '[]' é o valor default
export const useFavoritos = () => useState<Video[]>('favoritos', () => [])