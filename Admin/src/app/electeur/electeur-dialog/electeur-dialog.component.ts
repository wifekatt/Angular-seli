import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ElecteurService } from '../../service/electeur.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-electeur-dialog',
  templateUrl: './electeur-dialog.component.html',
  styleUrls: ['./electeur-dialog.component.css']
})
export class ElecteurDialogComponent implements OnInit {

  ElecteursForm !: FormGroup;
  actionBtn : string = "Save";

  constructor(private formBuilder : FormBuilder ,
    private electeurApi : ElecteurService ,
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private dialogRef : MatDialogRef<ElecteurDialogComponent>) { }

    ngOnInit(): void {
      this.ElecteursForm = this.formBuilder.group({
        FullName : ['',Validators.required],
        Email : ['',Validators.required],
        Telephone : ['',Validators.required],
        CIN : ['',Validators.required],
        Pid : ['',Validators.required],
        Zip_code : ['',Validators.required],
        Bank_code : ['',Validators.required],
        Language : ['',Validators.required],
        })
        if(this.editData){
          this.actionBtn = "Update";
          this.ElecteursForm.controls['FullName'].setValue(this.editData.FullName);
          this.ElecteursForm.controls['Email'].setValue(this.editData.Email);
          this.ElecteursForm.controls['Telephone'].setValue(this.editData.Telephone);
          this.ElecteursForm.controls['CIN'].setValue(this.editData.CIN);
          this.ElecteursForm.controls['Pid'].setValue(this.editData.Pid);
          this.ElecteursForm.controls['Zip_code'].setValue(this.editData.Zip_code);
          this.ElecteursForm.controls['Bank_code'].setValue(this.editData.Bank_code);
          this.ElecteursForm.controls['Language'].setValue(this.editData.Language);
        }
  }
  addElecteur(){
    if(!this.editData){
      if(this.ElecteursForm.valid){
        this.electeurApi.createElecteur(this.ElecteursForm.value)
        .subscribe({
          next:(res)=>{
            alert("electeur added successfully")
            this.ElecteursForm.reset();
            this.dialogRef.close('save');
          },
          error:()=>{
            alert("error while adding the electeur!!")
          }
        })
      }
    }else{
      this.updateElecteur();
    }
  
  }
  
  updateElecteur(){
    console.log(this.editData.electeurID)
        this.electeurApi.updateElecteur(this.editData.electeurID,this.ElecteursForm.value)
        .subscribe({
          next:(res)=>{
            alert("Electeur updated successfully")
            this.ElecteursForm.reset();
            this.dialogRef.close('update');
          },
          error:()=>{
            alert("error while updating the Electeur!!")
          }
        })
      }
  }
  