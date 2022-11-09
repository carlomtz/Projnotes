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
  res.render('home', viewModel);
};
// Exportando el controlador
export default { home };
