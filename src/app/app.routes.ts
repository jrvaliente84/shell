import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'mfe1-route',
    loadComponent: () => 
      loadRemoteModule('mfe1', './Component').then(m => m.App)
      // O si el MFE1 expone rutas:
      // loadChildren: () => loadRemoteModule('mfe1', './Routes').then(m => m.routes)
  },
  {
    path: 'demo',
    loadComponent: () => import('./demo/demo').then(m => m.Demo)
  },
];