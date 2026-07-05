import { Project } from '../core/models/project';

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: 'Sistema de Facturación Electrónica',
    description: 'Aplicación para gestión de comprobantes electrónicos, integración con servicios externos y generación de reportes.',
    technologies: ['Angular', 'Java', 'Spring Boot', 'SAP HANA'],
    imageUrl: 'assets/images/projects/PortalFE.png',
    videoUrl: 'assets/videos/projects/PortalFE_Demo.mp4',
    demoUrl: '',
    repositoryUrl: '',
    featured: true
  },
  {
    id: 2,
    name: 'Portal Web de Seguimiento de Pedidos de Venta',
    description: 'Portal web para consultar el estado de los pedidos de clientes en tiempo real, desde la creación del pedido hasta su asignación, preparación, despacho, ruta y entrega final.',
    technologies: ['SAP Business One', 'C#', 'ASP.NET', 'HTML', 'CSS', 'SQL Server'],
    imageUrl: 'assets/images/projects/SeguimientoPedidos.png',
    videoUrl: '',
    demoUrl: '',
    repositoryUrl: '',
    featured: true
  },
  {
    id: 3,
    name: 'Portal Web de Generación de Citas de Recojo',
    description: 'Portal web para la programación de citas de recojo de pedidos gestionadas por el equipo de Call Center. Permite registrar la cita en SAP y enviar automáticamente el borrador del documento al cliente y al equipo responsable.',
    technologies: ['SAP Business One', 'C#', 'ASP.NET', 'HTML', 'CSS', 'SQL Server'],
    imageUrl: 'assets/images/projects/CitasRecojo.png',
    videoUrl: '',
    demoUrl: '',
    repositoryUrl: '',
    featured: false
  },
  {
    id: 4,
    name: 'Portal Web para Gestión de Pagos a Proveedores',
    description: 'Portal web para controlar el flujo de revisión y programación de pagos de facturas de proveedores. Permite asignar documentos por área, realizar seguimiento por etapas y visualizar el estado actual desde recepción hasta finanzas.',
    technologies: ['SAP Business One', 'C#', 'ASP.NET', 'HTML', 'CSS', 'SQL Server'],
    imageUrl: 'assets/images/projects/GestionPagosProveedores.png',
    videoUrl: '',
    demoUrl: '',
    repositoryUrl: '',
    featured: true
  },
  {
    id: 5,
    name: 'App Móvil para Preparación de Pedidos y Gestión de Stock',
    description: 'Aplicación móvil para la preparación de pedidos de venta, conversión de presentaciones y transferencia de stock. Muestra los pedidos asignados por preparador y restringe las operaciones según los permisos configurados.',
    technologies: ['SAP Business One', 'Service Layer', 'C#', '.NET MAUI'],
    imageUrl: 'assets/images/projects/AppPreparacionPedidos.png',
    videoUrl: '',
    demoUrl: '',
    repositoryUrl: '',
    featured: true
  },
  {
    id: 6,
    name: 'App Móvil para Procesos de Orden de Fabricación',
    description: 'Aplicación móvil orientada al consumo de materiales y registro de producción en órdenes de fabricación, permitiendo controlar cantidades producidas en proceso y productos terminados.',
    technologies: ['SAP Business One', 'Service Layer', 'Visual Basic', 'B4A'],
    imageUrl: 'assets/images/projects/AppOrdenFabricacion.png',
    videoUrl: '',
    demoUrl: '',
    repositoryUrl: '',
    featured: false
  },
  {
    id: 7,
    name: 'App Móvil para Ofertas de Venta y Consulta de Stock',
    description: 'Aplicación móvil para que los vendedores generen ofertas de venta y consulten la disponibilidad de mercadería en tiempo real, integrada con la información comercial y logística de SAP.',
    technologies: ['SAP Business One', 'Service Layer', 'Visual Basic', 'B4A'],
    imageUrl: 'assets/images/projects/AppOfertasVenta.png',
    videoUrl: '',
    demoUrl: '',
    repositoryUrl: '',
    featured: false
  },
  {
    id: 8,
    name: 'Addon para Cierre Masivo de Líneas de Documentos de Marketing',
    description: 'Addon para SAP Business One que permite seleccionar múltiples líneas de documentos de marketing y cerrarlas de forma masiva, optimizando tareas operativas repetitivas.',
    technologies: ['SAP Business One SDK', 'DI API', 'C#', 'Windows Forms', '.NET'],
    imageUrl: 'assets/images/projects/AddonCierreLineas.png',
    videoUrl: '',
    demoUrl: '',
    repositoryUrl: '',
    featured: false
  },
  {
    id: 9,
    name: 'Addon para Creación de Devoluciones de Pedidos',
    description: 'Addon para gestionar devoluciones de pedidos según condiciones comerciales y logísticas, validando documentos facturados y entregados, y retornando mercadería mediante lotes y ubicaciones.',
    technologies: ['SAP Business One SDK', 'DI API', 'Visual Basic', 'Windows Forms', '.NET'],
    imageUrl: 'assets/images/projects/AddonDevoluciones.png',
    videoUrl: '',
    demoUrl: '',
    repositoryUrl: '',
    featured: false
  },
  {
    id: 10,
    name: 'Addon para Creación Masiva de Documentos Preliminares Aprobados',
    description: 'Componente para SAP Business One que automatiza la creación masiva de documentos aprobados, reduciendo tiempos de procesamiento y minimizando tareas manuales.',
    technologies: ['SAP Business One SDK', 'DI API', 'Visual Basic', 'Windows Forms', '.NET'],
    imageUrl: 'assets/images/projects/AddonDocumentosPreliminares.png',
    videoUrl: '',
    demoUrl: '',
    repositoryUrl: '',
    featured: false
  },
  {
    id: 11,
    name: 'Addon para Gestión de Pagos, Detracciones y Ajustes Contables',
    description: 'Aplicación para generar pagos relacionados a facturas de venta, gestionar detracciones y registrar asientos de ajuste por diferencias de tipo de cambio dentro de SAP Business One.',
    technologies: ['SAP Business One SDK', 'DI API', 'Visual Basic', 'Windows Forms', '.NET'],
    imageUrl: 'assets/images/projects/AddonGestionPagos.png',
    videoUrl: '',
    demoUrl: '',
    repositoryUrl: '',
    featured: true
  },
  {
    id: 12,
    name: 'Panel de Gestión y Asignación de Pedidos de Venta',
    description: 'Addon utilizado por el responsable de almacén para asignar pedidos a preparadores, monitorear el avance de preparación y visualizar indicadores de cumplimiento operativo.',
    technologies: ['SAP Business One SDK', 'DI API', 'Visual Basic', 'Windows Forms', '.NET'],
    imageUrl: 'assets/images/projects/PanelAsignacionPedidos.png',
    videoUrl: '',
    demoUrl: '',
    repositoryUrl: '',
    featured: true
  },
  {
    id: 13,
    name: 'Aplicación para Envío Masivo de Estados de Cuenta',
    description: 'Aplicación de escritorio para generar y enviar estados de cuenta por cliente de forma semanal, automatizando la emisión de reportes y distribución por correo electrónico.',
    technologies: ['Visual Basic', '.NET', 'Crystal Reports'],
    imageUrl: 'assets/images/projects/EnvioEstadosCuenta.png',
    videoUrl: '',
    demoUrl: '',
    repositoryUrl: '',
    featured: false
  },
  {
    id: 14,
    name: 'Web Service de Integración con SAP Business One',
    description: 'Servicio API para consultar stock, extraer información empresarial, generar documentos y actualizar registros en SAP Business One desde aplicaciones externas.',
    technologies: ['SAP Business One', 'Visual Basic', '.NET', 'API REST'],
    imageUrl: 'assets/images/projects/WebServiceSAP.png',
    videoUrl: '',
    demoUrl: '',
    repositoryUrl: '',
    featured: true
  }
];