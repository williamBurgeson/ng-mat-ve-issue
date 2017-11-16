import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyPageComponent } from './my-page/my-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/my-page', pathMatch: 'full' },
  { path: 'my-page', component: MyPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
