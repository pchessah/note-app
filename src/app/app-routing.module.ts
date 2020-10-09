import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home/home.component';
import { NoteListComponent } from './notes/note-list/note-list.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "all-notes", component: NoteListComponent},
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "**" , component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
