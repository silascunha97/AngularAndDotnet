import { RouterModule, Routes } from '@angular/router';
import path from 'node:path';
import { NgModule } from '@angular/core'
import { PessoasComponent } from './components/pessoas/pessoas.component';


 export const routes: Routes = [{
   path: 'pessoa', component: PessoasComponent
 }];

@NgModule({
//  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
