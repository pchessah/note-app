import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NewNoteComponent } from './notes/new-note/new-note.component';
import { NoteListComponent } from './notes/note-list/note-list.component';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations' 
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockServerService } from './mock-server.service';
import { SingleNoteComponent } from './notes/single-note/single-note.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorPageComponent,
    NewNoteComponent,
    NoteListComponent,
    SingleNoteComponent
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
