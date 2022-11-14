// Importamos la dependencia dotEnv
import dotEnv from 'dotenv';

// Cargar las variables de entorno
dotEnv.config();

// Creando objeto de configuracion

// Creando una configuracion por defecto
const defaultConfig = {
  port: process.env.PORT || 3000,
  appVersion: process.env.APP_VERSION,
};

// Configuracion para desarrollo
const devConfig = {
  env: 'development',
  mongoUrl: 'localurl',
  debug: process.env.DEBUG,
};

// Configuracion para produccion
const prodConfig = {
  env: 'production',
  mongoUrl: 'cloud url',
};

// Funcion que dado el entorno de ejecucion nos retorne el objeto de configuracion adecuado
function envConfig(env) {
  switch (env) {
    case 'development':
      return devConfig;
    case 'production':
      return prodConfig;
    default:
      return prodConfig;
  }
}

// Exportamos la configuracion

export default {
  ...defaultConfig,
  ...envConfig(process.env.NODE_ENV),
};
