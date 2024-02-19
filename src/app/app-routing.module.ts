import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetitionPageComponent } from './pages/competition-page/competition-page.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { AuthGuard } from './AuthGuard';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'competition', component: CompetitionPageComponent },
  { path: 'member', component: CompetitionPageComponent },
  {path: 'login', component: LoginFormComponent, canActivate: [AuthGuard]},
  {path: 'signup', component: RegisterFormComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
