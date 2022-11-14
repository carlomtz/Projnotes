// Importando dependencia debug
import Debug from 'debug';
import configKeys from '../server/config/configKeys';
// Establecemos el proceso a debuggear
const debug = Debug(configKeys.debug);
// Exportando el logger de debuggeo
export default debug;
