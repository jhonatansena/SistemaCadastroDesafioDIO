import { UserService } from './../../../components/user/user.service';
import { User } from './user.model';

import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';


/**
 * @title Table with selection
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: User[] = []
  
  displayedColumns: string[] = ['select', 'id','photo', 'name', 'weight', 'symbol', 'submitto'];
  dataSource = new MatTableDataSource<User>(this.users);
  selection = new SelectionModel<User>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

 
  // public dataSource : User = {
  //   id : 0,
  // photo :  "",
  // name : "Teste",
  // email : "",
  // emailAlternative :  "",
  // dataAdmission : ""
  // }
  

  constructor(private userService: UserService) { }


  ngOnInit(): void {
  this.userService.read().subscribe(users => {
    this.users = users
  })
  }

    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
      this.isAllSelected() ?
          this.selection.clear() :
          this.dataSource.data.forEach(row => this.selection.select(row));
    }
  
    /** The label for the checkbox on the passed row */
    checkboxLabel(row?: User): string {
     
      if (!row) {
        return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
      }
      return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${Number(row.id) + 1}`;
    }


}
 