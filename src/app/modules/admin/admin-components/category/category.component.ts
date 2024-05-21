import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from '../../admin-services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

  catForm !:FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBar : MatSnackBar,
    private adminService: AdminService
  
  ){}
  ngOnInit():void{
    this.catForm= this.fb.group({
      category:[null,[Validators.required]]
    })
  }
  addCategory(): void {
    if(this.catForm.valid){
      this.adminService.addCategory(this.catForm.value).subscribe((res)=>{
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
      this.catForm.markAllAsTouched();
    }
  }
 


}

