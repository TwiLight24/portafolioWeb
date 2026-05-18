import { Routes } from '@angular/router';

import { Home } from './features/home/home';
import { About } from './features/about/about';
import { Experience } from './features/experience/experience';
import { Projects } from './features/projects/projects';
import { Contact } from './features/contact/contact';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Inicio | Portafolio'
  },
  {
    path: 'sobre-mi',
    component: About,
    title: 'Sobre mí | Portafolio'
  },
  {
    path: 'experiencia',
    component: Experience,
    title: 'Experiencia | Portafolio'
  },  
  {
    path: 'proyectos',
    component: Projects,
    title: 'Proyectos | Portafolio'
  },
  {
    path: 'contacto',
    component: Contact,
    title: 'Contacto | Portafolio'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
