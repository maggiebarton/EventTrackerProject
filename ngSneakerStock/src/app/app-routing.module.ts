import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SneakerComponent } from './components/sneaker/sneaker.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DashComponent } from './components/dash/dash.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'sneaker', component: SneakerComponent },
  { path: 'dashboard', component: DashComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
