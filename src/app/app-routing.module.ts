import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './components/layout/dashboard.component';
import {UsersComponent} from './containers/users.component';
import {ViewUserComponent} from './containers/view-user.component';


const routes: Routes = [{
  path: '', component: DashboardComponent,
  children: [
    {path: '', component: UsersComponent},
    {path: 'user/:id', component: ViewUserComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
