import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './component/admin/admin.component';
import { AppComponent } from './app.component';
import { QuoteListComponent } from './component/quote-list/quote-list.component';


const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'quotes', component: QuoteListComponent },
  { path: 'admin', component: AdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
