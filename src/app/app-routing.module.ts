import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenderPredictionComponent } from './gender-prediction/gender-prediction.component';



const routes: Routes = [
  {path:'',component:GenderPredictionComponent},
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
