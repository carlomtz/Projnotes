// Importando los tramos de rutas
import homeRouter from '../home/homeRouter';

// Funcion de enrrutado principal
const addRoutes = (app) => {
  // Agregando enrutado de Home
  app.use('/', homeRouter);
};
export default { addRoutes };
