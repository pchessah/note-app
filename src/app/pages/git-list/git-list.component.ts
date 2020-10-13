import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { IGithubApi, IGithubIssue } from 'src/app/libs/interfaces';
import { GithubApiService } from 'src/app/libs/services';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';





@Component({
  selector: 'app-git-list',
  templateUrl: './git-list.component.html',
  styleUrls: ['./git-list.component.scss']
})
export class GitListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['created_at', 'state', 'number', 'title'];
  dataSource = new MatTableDataSource<IGithubIssue>();
  selection = new SelectionModel<IGithubIssue>(true, []);
  data: IGithubIssue[] = [];

  constructor( private _gitService: GithubApiService, private http: HttpClient){ }

  ngOnInit(): void {

  }
  ngAfterViewInit(): void{
    this._gitService.getRepoIssues("true", "asc", 1 ).subscribe((data: IGithubApi)=>{
      this.dataSource.data = data.items
    })
  }

  

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: IGithubIssue): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.number + 1}`;
  }
}
