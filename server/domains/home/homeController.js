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

const about = (req, res) => {
  res.render('home/about', {});
};
// Exportando el controlador
export default { home, about };
