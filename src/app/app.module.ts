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
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockServerService } from './libs/services/mock-server.service';
import { SingleNoteComponent } from './pages/notes/single-note/single-note.component';
import { EditNoteComponent } from './pages/notes/edit-note/edit-note.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorPageComponent,
    NewNoteComponent,
    NoteListComponent,
    SingleNoteComponent,
    EditNoteComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatTableModule,
    MatDialogModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      MockServerService, { dataEncapsulation: false }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
