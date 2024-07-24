import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [

  { path: 'proyectos', component: ProyectosComponent },
  { path: 'sobreMi', component: SobreMiComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'inicio', component: InicioComponent },



  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
