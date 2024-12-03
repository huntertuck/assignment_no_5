import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorComponent } from './author/author.component'; // Ensure correct imports
import { TitleComponent } from './title/title.component';

const routes: Routes = [
  { path: '', redirectTo: '/authors', pathMatch: 'full' }, // Redirect to authors by default
  { path: 'authors', component: AuthorComponent },
  { path: 'titles', component: TitleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
