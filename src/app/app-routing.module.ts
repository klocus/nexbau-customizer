import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomizerComponent } from "./components/customizer/customizer.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";

const routes: Routes = [
  {path: '', redirectTo: 'doors/1', pathMatch: 'full'},
  {path: 'doors/:id', component: CustomizerComponent},
  {path: '**', redirectTo: 'not-found', pathMatch: 'full'},
  {path: 'not-found', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
