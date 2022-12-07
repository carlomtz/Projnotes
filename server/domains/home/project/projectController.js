// Creando los Actions Methods
// del controlador Project

// Importando el modelo del proyecto
import ProjectModel from './projectModel';
// GET "/project"
// GET "/project/list"
const list = async (req, res) => {
  // 1. Generando el view-model
  // Retorar los proyectos de la base de datos
  const projectDocs = await ProjectModel.find().lean().exec();
  // Regreso el resultado de la peticion
  res.render('project/list', { projects });
  // res.json(projects);
};

// GET "/project/add"
// GET "/project/create"
const showAddProjectForm = (req, res) => {
  const viewModel = {};
  res.render('project/add', viewModel);
};
// POST "/project/add"
// POST "/project/create"
const addProject = async (req, res) => {
  // Rescatando la info del formulario
  const { validData, errorData: error } = req;
  let project = {};
  let errorModel = {};
  // Desesctructurando y renombrando error de datos
  // Verificando si hay error de validacion
  if (error) {
    // Rescatar los datos del formlario
    project = error.value;
    // Quiero generar un objeto que contenga
    // los campos con error y sus errores
    errorModel = error.inner.reduce((prev, curr) => {
      // Creabdo una variable temporal donde
      // guardare el elemento anterior
      const newVal = prev;
      newVal[`${curr.path}Error`] = curr.message;
      return newVal;
    }, {});
  } else {
    // Creando un documento con los datos provistos por el formulario
    const projectInstance = new ProjectModel(validData);
    // Guardando el documento den la base de datos
    try {
      const projectDocument = await projectInstance.save();
      return res.json(projectDocument);
      // Cambiar esto por winston
      // eslint-disable-next-line no-unreachable
      console.log(`Proyecto Creado: ${JSON.stringify(projectDocument)}`);
      // Redireccionando al listado de proyectos
      return res.redirect('/project');
    } catch (error1) {
      return res.status(404).json({ error1 });
    }
  }
  // Contestando los datos del proyecto
  return res.status(200).render('project/add', { project, errorModel });
};

// Exportando el Controlador
export default { list, showAddProjectForm, addProject };
