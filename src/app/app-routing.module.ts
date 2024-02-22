import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetitionPageComponent } from './pages/competition-page/competition-page.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { AuthGuard } from './AuthGuard';
import { ManageMemberPageComponent } from './pages/manage-member-page/manage-member-page.component';
import { ManagerAuthGuard } from './ManagerAuthGuard';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'competition', component: CompetitionPageComponent },
  { path: 'member', component: CompetitionPageComponent },
  { path: 'login', component: LoginFormComponent, canActivate: [AuthGuard] },
  { path: 'signup', component: RegisterFormComponent, canActivate: [AuthGuard] },
  { path: 'managemember', component: ManageMemberPageComponent , canActivate: [ManagerAuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
