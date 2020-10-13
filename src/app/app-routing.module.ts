import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { GitListComponent } from './pages/git-list/git-list.component';
import { HomeComponent } from './pages/home/home/home.component';
import { EditNoteComponent } from './pages/notes/edit-note/edit-note.component';
import { NoteListComponent } from './pages/notes/note-list/note-list.component';
import { SingleNoteComponent } from './pages/notes/single-note/single-note.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "all-notes", component: NoteListComponent },
  { path: "all-notes/:id", component: SingleNoteComponent },
  { path: "edit-note/:id", component: EditNoteComponent },
  { path: "git-list", component: GitListComponent},
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
