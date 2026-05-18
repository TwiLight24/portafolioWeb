import { Project } from '../core/models/project';

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: 'Sistema de Facturación Electrónica',
    description: 'Aplicación para gestión de comprobantes electrónicos, integración con servicios externos y generación de reportes.',
    technologies: ['Angular', 'Java', 'Spring Boot', 'SAP HANA'],
    imageUrl: 'assets/images/projects/PortalFE.png',
    demoUrl: '',
    repositoryUrl: '',
    featured: true
  },
  {
    id: 2,
    name: 'Dashboard Empresarial',
    description: 'Panel dinámico para visualizar métricas de negocio, ventas, estados de documentos y reportes.',
    technologies: ['Angular', 'TypeScript', 'Chart.js', 'API REST'],
    imageUrl: 'assets/images/projects/PortalFE.png',
    demoUrl: '',
    repositoryUrl: '',
    featured: true
  },
  {
    id: 3,
    name: 'Integración SAP Business One',
    description: 'Servicio para conectar procesos externos con SAP Business One mediante consultas, servicios y lógica empresarial.',
    technologies: ['Java', 'SAP B1', 'Service Layer', 'HANA'],
    imageUrl: 'assets/images/projects/PortalFE.png',
    demoUrl: '',
    repositoryUrl: '',
    featured: true
  },
  {
    id: 4,
    name: 'Reportes SUNAT / PLE',
    description: 'Generación de reportes tributarios, formatos planos y consultas optimizadas para cumplimiento normativo.',
    technologies: ['SAP HANA', 'SQL', 'Java', 'SUNAT'],
    imageUrl: 'assets/images/projects/PortalFE.png',
    demoUrl: '',
    repositoryUrl: '',
    featured: false
  },
  {
    id: 5,
    name: 'Gestión de Anexos Documentarios',
    description: 'Módulo para cargar, almacenar y consultar archivos anexos asociados a documentos empresariales.',
    technologies: ['Java', 'SQL Server', 'Angular', 'API REST'],
    imageUrl: 'assets/images/projects/PortalFE.png',
    demoUrl: '',
    repositoryUrl: '',
    featured: false
  },
  {
    id: 6,
    name: 'Portal de Consultas Operativas',
    description: 'Portal web para centralizar consultas, indicadores y seguimiento de operaciones internas.',
    technologies: ['Angular', 'TypeScript', 'SQL Server'],
    imageUrl: 'assets/images/projects/PortalFE.png',
    demoUrl: '',
    repositoryUrl: '',
    featured: false
  }
];