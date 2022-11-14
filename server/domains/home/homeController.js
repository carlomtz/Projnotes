// Cargando las variables de entorno
import configKeys from '../../config/configKeys';

// Creando los action methods
// GET "/"
// GET "/index"
const home = (req, res) => {
  // 1. Generando el view-model
  const viewModel = {
    title: 'Express',
    author: 'Karlo Uriek',
  };
  // 2.Mandamos a generar la vista con el Template Engine
  res.render('home/home', viewModel);
};
// Get "/about"
const about = (req, res) => {
  const viewModel = {
    appVersion: configKeys.appVersion,
  };

  res.render('home/about', viewModel);
};
// Exportando el controlador
export default { home, about };
