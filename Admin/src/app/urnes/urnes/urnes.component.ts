import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UrnesDialogComponent } from '../urnes-dialog/urnes-dialog.component';
import { UrneService } from '../../service/urne.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-urnes',
  templateUrl: './urnes.component.html',
  styleUrls: ['./urnes.component.css']
})
export class UrnesComponent implements OnInit {

  displayedColumns: string[] = ['urneName','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private dialog: MatDialog , private urneApi : UrneService) { }

  ngOnInit(): void {
    this.getAllLists();
  }
 

  openDialog() {
    this.dialog.open(UrnesDialogComponent, {
      width:'30%'
    }).afterClosed().subscribe(val=>{
      if(val === 'save'){
        this.getAllLists();
        }
    })
  }

  getAllLists(){
    this.urneApi.getUrnes()
          .subscribe({
            next:(res:any)=>{
              console.log(JSON.stringify(res));
              this.dataSource = new MatTableDataSource(res);
              this.dataSource.paginator = this.paginator;
              this.dataSource.sort = this.sort;

            },
            error:(err)=>{
              alert("error while fetching the records!!")
            }
          })
  }

  editUrne(row : any){
    this.dialog.open(UrnesDialogComponent,{
    width:'30%',
    data:row
    }).afterClosed().subscribe(val=>{
      if(val === 'update'){
        this.getAllLists();
        }
    })
    }
    deleteUrne(id : number){
    this.urneApi.deleteUrne(id)
    .subscribe({
      next:(res)=>{
        alert("urne deleted successfully");
        this.getAllLists();
      },
      error:()=>{
        alert("error while deleting the urne!!")
      }
    })

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

