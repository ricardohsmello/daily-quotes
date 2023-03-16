import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { QuoteAddComponent } from './component/quote-add/quote-add.component';
import { QuoteListComponent } from './component/quote-list/quote-list.component';


const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'quotes', component: QuoteListComponent },
  { path: 'add', component: QuoteAddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
