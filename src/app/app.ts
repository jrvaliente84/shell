import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div style="font-family: sans-serif; padding: 20px;">
      <nav style="border-bottom: 1px solid #ccc; padding-bottom: 10px; margin-bottom: 20px;">
        <strong style="margin-right: 20px;">Mi Aplicación Shell</strong>
        
        <!-- Enlaces de navegación -->
        <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" style="margin-right: 15px;">Inicio</a>
        
        <a routerLink="/mfe1-route" routerLinkActive="active" style="color: #007bff; font-weight: bold;">Ver Microfrontend 1</a>
      </nav>

      <main style="border: 2px dashed #eee; padding: 15px; min-height: 200px;">
        <p> Aquí es donde se cargará el MFE1 cuando pulses el enlace </p>
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [`
    .active { color: green; font-weight: bold; }
    a { text-decoration: none; color: #333; }
  `]
})
export class AppComponent {}