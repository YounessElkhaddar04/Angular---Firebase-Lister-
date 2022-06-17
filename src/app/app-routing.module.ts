import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployeesComponent} from './components/list-employees/list-employees.component';
import { CreerEmployeeComponent } from './components/creer-employee/creer-employee.component';
const routes: Routes = [
  { path:'' , redirectTo :'app-list-employees',pathMatch:'full'},
  { path: 'app-list-employees', component:ListEmployeesComponent},
  { path: 'app-creer-employee',component:CreerEmployeeComponent}
  /*{ path:'**' , redirectTo :'app-list-employees',pathMatch:'full'}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }