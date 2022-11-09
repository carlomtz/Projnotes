// Importando el Router de Express
import { Router } from 'express';
// Importando el controlador
import homeController from './homeController';
// Creando instancia del enrutador
const router = new Router();

// Enrutamos
// Get '/'
// Get '/home'
// Get '/index'
router.get(['/', '/home', '/index'], homeController.home);
// Exporto este tramo de ruta
export default router;
