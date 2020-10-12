import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { IJsonSampleData, IpagedData } from 'src/app/libs/interfaces/IJsonSampleData';
import { IPeriodicElement } from 'src/app/libs/interfaces/IPeriodElement';
import { JsonApiSericeService } from 'src/app/libs/services/json-api-service/json-api-serice.service';
import { NewNoteComponent } from 'src/app/notes/new-note/new-note.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  public ELEMENT_DATA: IJsonSampleData[] = <Array<IJsonSampleData>>{}

  public displayedColumns: string[] = ['avatar', 'email', 'first_name', 'id', 'last_name']

  public dataSource = this.ELEMENT_DATA;

  constructor(public dialog: MatDialog, private jsonApiSerrvice: JsonApiSericeService) {
    this.jsonApiSerrvice.getSampleJsonApiRecords().subscribe((data: IpagedData) => {
      this.dataSource = data.data
    },
      (err) => { console.log(err) },
      () => { }
    )
  }

  // createNewNote(): void {
  //   const dialogRef = this.dialog.open(NewNoteComponent, {
  //     width: "500px",
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log("Modal closed");
  //   })
  // }

  ngOnInit(): void { }


}
