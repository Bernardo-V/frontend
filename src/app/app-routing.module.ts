import { NgModule } from '@angular/core'; //Hay que agregar Component?
import { RouterModule, Routes } from '@angular/router';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditProyectosComponent } from './components/proyectos/edit-proyectos.component';
import { NewProyectosComponent } from './components/proyectos/new-proyectos.component';
import { EditSkillsComponent } from './components/skills/edit-skills.component';
import { NewSkillsComponent } from './components/skills/new-skills.component';
import { EditpersonaComponent } from './components/persona/editpersona.component';


import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path: 'nuevaedu', component: NewEducacionComponent},
  {path: 'nuevaexp', component: NewExperienciaComponent},
  {path: 'nuevaskill', component:NewSkillsComponent},
  {path: 'nuevapro', component:NewProyectosComponent},
  {path: 'editedu/:id', component: EditEducacionComponent},
  {path: 'editexp/:id', component: EditExperienciaComponent},
  {path: 'editskill/:id', component:EditSkillsComponent},
  {path: 'editpro/:id', component:EditProyectosComponent},
  {path: 'editpersona/:id', component:EditpersonaComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
