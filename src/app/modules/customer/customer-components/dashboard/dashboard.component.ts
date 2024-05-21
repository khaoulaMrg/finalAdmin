import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomerService } from '../../customer-services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild("fileUpload", { static: false }) fileUpload: ElementRef;
  selectedFile: File | null;
imagePreview: string | ArrayBuffer | null;
  postForm: FormGroup;
  listOfCategories:any=[];

  constructor(
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    private router: Router,
    private customerService: CustomerService
  ) { }


  onFileSelected(event:any){
    this.selectedFile = event.target.files[0];
    this.previwImage();
  }
  ngOnInit() {
    this.postForm = this.fb.group({

      name: [null, Validators.required],
      content: [null, [Validators.required, Validators.maxLength(5000)]],
      postedBy: [null, Validators.required],
      categoryId: [null, Validators.required],
    });
    this.getAllCategories();
  }

  getAllCategories(){
    this.customerService.getAllCategories().subscribe(res=>{
      this.listOfCategories=res;
    }

    )
  }

  previwImage(){
    const reader = new FileReader();
    reader.onload =()=> {
      this.imagePreview = reader.result;
    }
    reader.readAsDataURL(this.selectedFile);
  }



  createNewPost() {
    if (this.postForm.valid) {
     

    const formData : FormData= new FormData();
    formData.append('img',this.selectedFile);
    formData.append('name', this.postForm.get('name').value);
    formData.append('content', this.postForm.get('content').value);
    formData.append('postedBy', this.postForm.get('postedBy').value);
    formData.append('categoryId', this.postForm.get('categoryId').value);


    this.customerService.createPost(formData).subscribe((res)=>{
        if (res.id != null) {
          this.snackBar.open("Success: Post added successfully", "Close", {
            duration: 5000,
            panelClass: ['snackbar-success']
          });
           this.router.navigateByUrl('/customer/dashboard');
        } else {
          this.snackBar.open("Error: Something went wrong", "Close", {
            duration: 5000,
            panelClass: ['snackbar-error']
          });
        }
      })
      }else{

        for(const i in this.postForm.controls){
          this.postForm.controls[i].markAsDirty();
          this.postForm.controls[i].updateValueAndValidity();


        }
      }




    }}