import * as videoController from "../controllers/video";

const router = createRouter();

// Endpoints
router.get("/videos", defineEventHandler(videoController.buscaVideos));
router.get("/videos/:id", defineEventHandler(videoController.buscaVideoPorId));
router.post("/videos", defineEventHandler(videoController.adicionaVideo));
router.put("/videos/:id", defineEventHandler(videoController.atualizaVideo));
router.delete("/videos/:id", defineEventHandler(videoController.deletaVideo));

// OBS: Esse use base é da biblioteca H3 (W3, sei lá...)
export default useBase("/api/v1", router.handler);