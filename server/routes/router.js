// Importando los tramos de rutas
import homeRouter from '../domains/home/homeRouter';
import projectRouter from '../domains/home/project/projectRouter';
// Funcion de enrrutado principal
const addRoutes = (app) => {
  // Agregando enrutado de Home
  app.use('/', homeRouter);
  // Agregando enrutado de Project
  app.use('/project', projectRouter);
};

export default { addRoutes };
