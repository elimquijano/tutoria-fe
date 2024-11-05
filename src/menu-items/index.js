import seguridad from './seguridad';
import cuenta from './cuenta';
import retransmission from './retransmission';
import { getSession } from 'common/common';
import traccar from './traccar';
  // import reportes from './reportes';
import plan from './plan';
import vehiculos from './vehiculos';

const menuItems = {
  items: []
};
const privilegios = JSON.parse(getSession('PRIVILEGIOS'));
if (privilegios) {
  const tieneSeguridad = privilegios.some((item) => item.code === 'PRIV_MOD_SEGURIDAD');
  const tieneRetransmision = privilegios.some((item) => item.code === 'PRIV_MOD_RETRANSMISSION');
  const tieneTraccar = privilegios.some((item) => item.code === 'PRIV_MOD_TRACCAR');
  const tieneVehiculos = privilegios.some((item) => item.code === 'PRIV_MOD_VEHICULOS');

  if (tieneVehiculos) {
    menuItems.items.push(vehiculos);
  }
  if (tieneRetransmision) {
    menuItems.items.push(retransmission);
  }
  // if (tieneInventario) {  
  //   menuItems.items.push(inventario);
  // }
  if (tieneTraccar) {
    menuItems.items.push(traccar);
  }
  if (tieneSeguridad) {
    menuItems.items.push(seguridad);
  }
  // menuItems.items.push(reportes);
  menuItems.items.push(plan);
  menuItems.items.push(cuenta);
}

export default menuItems;
