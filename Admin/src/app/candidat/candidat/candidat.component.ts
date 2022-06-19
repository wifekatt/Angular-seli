import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CandidatDialogComponent } from '../candidat-dialog/candidat-dialog.component';
import { CandidatService } from '../../service/candidat.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-candidat',
  templateUrl: './candidat.component.html',
  styleUrls: ['./candidat.component.css']
})
export class CandidatComponent implements OnInit {

  displayedColumns: string[] = ['ID', 'FullName','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private dialog: MatDialog , private CandidatApi : CandidatService) { }

  ngOnInit(): void {
    this.getAllCandidats();
  }
 

  openDialog() {
    this.dialog.open(CandidatDialogComponent, {
      width:'30%'
    }).afterClosed().subscribe(val=>{
      if(val === 'save'){
        this.getAllCandidats();
        }
    })
  }

  getAllCandidats(){
    this.CandidatApi.getCandidats()
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

  editCandidat(row : any){
    this.dialog.open(CandidatDialogComponent,{
    width:'30%',
    data:row
    }).afterClosed().subscribe(val=>{
      if(val === 'update'){
        this.getAllCandidats();
        }
    })
    }
  deleteCandidat(id : number){
    this.CandidatApi.deleteCandidat(id)
    .subscribe({
      next:(res)=>{
        alert("Candidat deleted successfully");
        this.getAllCandidats();
      },
      error:()=>{
        alert("error while deleting the Candidat!!")
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

