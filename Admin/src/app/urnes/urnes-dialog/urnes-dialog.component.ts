import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { UrneService } from '../../service/urne.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-urnes-dialog',
  templateUrl: './urnes-dialog.component.html',
  styleUrls: ['./urnes-dialog.component.css']
})
export class UrnesDialogComponent implements OnInit {

  UrnesForm !: FormGroup;
  actionBtn : string = "Save";

  constructor(private formBuilder : FormBuilder ,
    private UrneApi : UrneService ,
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private dialogRef : MatDialogRef<UrnesDialogComponent>) { }

    ngOnInit(): void {
      this.UrnesForm = this.formBuilder.group({
        urneName : ['',Validators.required],
        })
        if(this.editData){
          this.actionBtn = "Update";
          this.UrnesForm.controls['urneName'].setValue(this.editData.urneName);
        }
  }
  addUrne(){
    if(!this.editData){
      if(this.UrnesForm.valid){
        this.UrneApi.createUrne(this.UrnesForm.value)
        .subscribe({
          next:(res)=>{
            alert("Urne added successfully")
            this.UrnesForm.reset();
            this.dialogRef.close('save');
          },
          error:()=>{
            alert("error while adding the Urne!!")
          }
        })
      }
    }else{
      this.updateUrne();
    }
  
  }
  
  updateUrne(){
    console.log(this.editData.urneID)
        this.UrneApi.updateUrne(this.editData.urneID,this.UrnesForm.value)
        .subscribe({
          next:(res)=>{
            alert("Urne updated successfully")
            this.UrnesForm.reset();
            this.dialogRef.close('update');
          },
          error:()=>{
            alert("error while updating the Urne!!")
          }
        })
      }
  }
  
