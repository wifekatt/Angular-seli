import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { CandidatService } from '../../service/candidat.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-candidat-dialog',
  templateUrl: './candidat-dialog.component.html',
  styleUrls: ['./candidat-dialog.component.css']
})
export class CandidatDialogComponent implements OnInit {
  CandidatsForm !: FormGroup;
  actionBtn : string = "Save";

  constructor(private formBuilder : FormBuilder ,
    private CandidatApi : CandidatService ,
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private dialogRef : MatDialogRef<CandidatDialogComponent>) { }

    ngOnInit(): void {
      this.CandidatsForm = this.formBuilder.group({
        candidatName : ['',Validators.required],
        })
        if(this.editData){
          this.actionBtn = "Update";
          this.CandidatsForm.controls['candidatName'].setValue(this.editData.candidatName);
        }
  }
  addCandidat(){
    if(!this.editData){
      if(this.CandidatsForm.valid){
        this.CandidatApi.createCandidat(this.CandidatsForm.value)
        .subscribe({
          next:(res)=>{
            alert("Candidat added successfully")
            this.CandidatsForm.reset();
            this.dialogRef.close('save');
          },
          error:()=>{
            alert("error while adding the Candidat!!")
          }
        })
      }
    }else{
      this.updateCandidat();
    }
  
  }
  
  updateCandidat(){
    console.log(this.editData.CandidatID)
        this.CandidatApi.updateCandidat(this.editData.CandidatID,this.CandidatsForm.value)
        .subscribe({
          next:(res)=>{
            alert("Candidat updated successfully")
            this.CandidatsForm.reset();
            this.dialogRef.close('update');
          },
          error:()=>{
            alert("error while updating the Candidat!!")
          }
        })
      }
  }
  