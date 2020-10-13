import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home/home.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NewNoteComponent } from './pages/notes/new-note/new-note.component';
import { NoteListComponent } from './pages/notes/note-list/note-list.component';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { SingleNoteComponent } from './pages/notes/single-note/single-note.component';
import { EditNoteComponent } from './pages/notes/edit-note/edit-note.component';

const PAGES = [
  HomeComponent,
  ErrorPageComponent,
  NewNoteComponent,
  NoteListComponent,
  SingleNoteComponent,
  EditNoteComponent
]

const MAT_MODULES = [
  MatPaginatorModule,
  MatSortModule,
  MatTableModule,
  MatDialogModule,
  MatCardModule
]

const REUSABLE = [

]

@NgModule({
  declarations: [
    AppComponent,
    ...PAGES,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    ...MAT_MODULES,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,

    // HttpClientInMemoryWebApiModule.forRoot(
    //   MockServerService, { dataEncapsulation: false }
    // ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
