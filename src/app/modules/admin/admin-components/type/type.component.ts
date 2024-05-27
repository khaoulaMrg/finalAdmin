import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from '../../admin-services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrl: './type.component.css'
})
export class TypeComponent {
  typeForm !:FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBar : MatSnackBar,
    private adminService: AdminService
  
  ){}
  ngOnInit():void{
    this.typeForm= this.fb.group({
      type:[null,[Validators.required]]
    })
  }
  addType(): void {
    if(this.typeForm.valid){
      this.adminService.addType(this.typeForm.value).subscribe((res)=>{
        if(res.id!=null){
          this.snackBar.open('category posted successfully!' , 'close', {
            duration: 5000

          });
          
          this.router.navigateByUrl('/admin/category');
        }else{
          this.snackBar.open(res.message , 'close',{
            duration:5000,
            panelClass:'error-snackbar'
          })

        }
      })
    }else{
      this.typeForm.markAllAsTouched();
    }
  }
 


}

