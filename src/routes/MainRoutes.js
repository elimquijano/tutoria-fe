import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));
//Seguridad page
const RolPage = Loadable(lazy(() => import('views/seguridad/rol')));
const LocalPage = Loadable(lazy(() => import('views/seguridad/local')));
const PrivilegiosPage = Loadable(lazy(() => import('views/seguridad/privilegios')));
const ModuloPage = Loadable(lazy(() => import('views/seguridad/modulo')));
const UsuarioPage = Loadable(lazy(() => import('views/seguridad/usuario')));
const ContactosPage = Loadable(lazy(() => import('views/seguridad/contacto')));
const TransaccionPage = Loadable(lazy(() => import('views/seguridad/transacciones')));
const PrivilegiosRolPage = Loadable(lazy(() => import('views/seguridad/privilegiorol')));
const UserRolPage = Loadable(lazy(() => import('views/seguridad/userrol')));

const ProductoPage = Loadable(lazy(() => import('views/inventario/producto')));
const CategoriaPage = Loadable(lazy(() => import('views/inventario/categoria')));
const ProveedorPage = Loadable(lazy(() => import('views/compras/proveedor')));
const CompraPage = Loadable(lazy(() => import('views/compras/compra')));
const DetCompraPage = Loadable(lazy(() => import('views/compras/detcompra')));
const VentaPage = Loadable(lazy(() => import('views/ventas/venta')));
const DetVentaPage = Loadable(lazy(() => import('views/ventas/detventa')));
const ClientePage = Loadable(lazy(() => import('views/ventas/cliente')));
const PerfilPage = Loadable(lazy(() => import('views/cuenta/perfil')));

const DetRepuestoPage = Loadable(lazy(() => import('views/servicioTecnico/detrepuesto')));
const ModeloEquipoPage = Loadable(lazy(() => import('views/servicioTecnico/modeloequipo')));
const ServicioTecnicoPage = Loadable(lazy(() => import('views/servicioTecnico/serviciotecnico')));
const DetServicioTecnicoPage = Loadable(lazy(() => import('views/servicioTecnico/detserviciotecnico')));
const InformePage = Loadable(lazy(() => import('views/servicioTecnico/informe')));

const ReporteInventarioPage = Loadable(lazy(() => import('views/reportes/reporteInventario')));

const GRetransmissionPage = Loadable(lazy(() => import('views/retransmission/gretransmission')));
const GHostRetransmissionPage = Loadable(lazy(() => import('views/retransmission/ghostretransmission')));
const GRetransmissionLogsPage = Loadable(lazy(() => import('views/retransmission/gretransmissionlogs')));
const TDispositivos = Loadable(lazy(() => import('views/traccar/tdispositivos')));
const GCompanies = Loadable(lazy(() => import('views/retransmission/gcompanies')));
const GDivisiones = Loadable(lazy(() => import('views/retransmission/gdivisiones')));
const GRepeticionRutaRetransmision = Loadable(lazy(() => import('views/retransmission/grepeticionRutaRetransmision')));
const Mapa = Loadable(lazy(() => import('views/mapa/Mapa')));
const VehiculosMapa = Loadable(lazy(() => import('views/vehiculos/vehiculosMapa')));
const ReportePositionsPage = Loadable(lazy(() => import('views/reportes/reportePositions')));
const MapaPage = Loadable(lazy(() => import('views/mapa/MapPage')));
//const VehiculosMapa = Loadable(lazy(() => import('views/mapa/MapPage')));
//const MapaPage = Loadable(lazy(() => import('views/vehiculos/vehiculosMapa')));//TODO ELIM VALIDAR
const RepeticionRuta = Loadable(lazy(() => import('views/vehiculos/repeticionRuta')));

const PlanUserPage= Loadable(lazy(() => import('views/plan/planUser')));
const IconosPerso = Loadable(lazy(() => import('views/traccar/iconos')));
const PhotosPerso = Loadable(lazy(() => import('views/traccar/photos')));
const Detalle = Loadable(lazy(() => import('views/traccar/detalle')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-typography',
          element: <UtilsTypography />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-color',
          element: <UtilsColor />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-shadow',
          element: <UtilsShadow />
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'tabler-icons',
          element: <UtilsTablerIcons />
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'material-icons',
          element: <UtilsMaterialIcons />
        }
      ]
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    },
    {
      path: 'rol',
      element: <RolPage />
    },
    {
      path: 'producto',
      element: <ProductoPage />
    },
    {
      path: 'categoria',
      element: <CategoriaPage />
    },
    {
      path: 'proveedor',
      element: <ProveedorPage />
    },
    {
      path: 'local',
      element: <LocalPage />
    },
    {
      path: 'compra',
      element: <CompraPage />
    },
    {
      path: 'detcompra/:id',
      element: <DetCompraPage />
    },
    {
      path: 'venta',
      element: <VentaPage />
    },
    {
      path: 'detventa/:id',
      element: <DetVentaPage />
    },
    {
      path: 'privilegio',
      element: <PrivilegiosPage />
    },
    {
      path: 'modulo',
      element: <ModuloPage />
    },
    {
      path: 'usuario',
      element: <UsuarioPage />
    },
    {
      path: 'contacto',
      element: <ContactosPage />
    },
    {
      path: 'cliente',
      element: <ClientePage />
    },
    {
      path: 'rol/:id',
      element: <PrivilegiosRolPage />
    },
    {
      path: 'usuario/:id',
      element: <UserRolPage />
    },
    {
      path: 'perfil',
      element: <PerfilPage />
    },
    {
      path: 'detrepuesto/:id/:detid',
      element: <DetRepuestoPage />
    },
    {
      path: 'modeloequipo',
      element: <ModeloEquipoPage />
    },
    {
      path: 'serviciotecnico',
      element: <ServicioTecnicoPage />
    },
    {
      path: 'detserviciotecnico/:id',
      element: <DetServicioTecnicoPage />
    },
    {
      path: 'reporte/inventario',
      element: <ReporteInventarioPage />
    },
    {
      path: 'transacciones',
      element: <TransaccionPage />
    },
    {
      path: 'informe/:id/:detid',
      element: <InformePage />
    },
    {
      path: 'gretransmission',
      element: <GRetransmissionPage />
    },
    {
      path: 'ghostretransmission',
      element: <GHostRetransmissionPage />
    },
    {
      path: 'gretransmissionlogs',
      element: <GRetransmissionLogsPage />
    },
    {
      path: 'gcompanies',
      element: <GCompanies />
    },
    {
      path: 'gdivitions',
      element: <GDivisiones />
    },
    {
      path: 'grepeticion-ruta-retransmission',
      element: <GRepeticionRutaRetransmision />
    },
    {
      path: 'tdispositivos',
      element: <TDispositivos />
    },
    {
      path: 'reportes/positions',
      element: <ReportePositionsPage />
    },
    {
      path: 'plan',
      element: <PlanUserPage />
    },
    {
      path: 'iconos',
      element: <IconosPerso />
    },
    {
      path: 'photos',
      element: <PhotosPerso />
    },
    {
      path: 'detalle',
      element: <Detalle />
    },
    {
      path: 'vehiculos-mapa',
      element: <VehiculosMapa />
    },
    {
      path: 'repeticion-ruta',
      element: <RepeticionRuta />
    },
    {
      path: 'mapas',
      element: <Mapa />
    },
    {
      path: 'mapas/:id/:name',
      element: <MapaPage />
    }
  ]
};

export default MainRoutes;
