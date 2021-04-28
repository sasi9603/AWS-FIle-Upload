import { ToggleComponentComponent } from './toggle-component/toggle-component.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabaseComponent } from './database/database.component';
import { FormsComponent } from './forms/forms.component';
import { HomeComponent } from './home/home.component';
import { LocalComponent } from './local/local.component';

const routes: Routes = [{ path: '', component: HomeComponent },
{ path: 'home', component: HomeComponent },
{ path: 'forms', component: FormsComponent } ,
{ path: 'database', component: DatabaseComponent },
{ path: 'local', component: LocalComponent },
{path:'toggle',component:ToggleComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
