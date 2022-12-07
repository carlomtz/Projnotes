// Importamos dependencia de mongoose
import mongoose from 'mongoose';
// Llamamos dependencia de winston
import logger from './winston';

class MongooseOdm {
  // Constructor de la clase
  constructor(url) {
    this.url = url;
  }

  // Metodo para conectar a la BD
  async connect() {
    try {
      // Configuraciones que requiere mongoose
      mongoose.Promise = global.Promise;
      logger.info(`Conectando a la Base de datos en: ${this.url}`);
      // Intento de conexión
      const connection = await mongoose.connect(this.url);
      return connection;
    } catch (error) {
      logger.error(
        ` No se pudo realizar la conexion debido a: ${error.message}`
      );
      return false;
    }
  }
}
export default MongooseOdm;
