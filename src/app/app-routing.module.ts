import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetitionPageComponent } from './pages/competition-page/competition-page.component';

const routes: Routes = [
  { path: 'competition', component: CompetitionPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
