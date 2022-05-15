import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepagesComponent } from './homepages.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { InformateComponent } from './Components/informate/informate.component';

const routes: Routes = [
  {path: '', component:HomepagesComponent,
children:[{path:'',component:InicioComponent},
{path:'Informate', component:InformateComponent}
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
