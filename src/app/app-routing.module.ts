import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SistemaBancarioComponent } from './pages/sistema-bancario/sistema-bancario.component';

const routes: Routes = [
  {
    path:'',
    component: SistemaBancarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
