import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../customer/customer-services/customer.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { catchError, switchMap, tap } from 'rxjs';
import { Router } from '@angular/router';
import { AdminService, PostDTO } from '../../admin-services/admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  categories: any = [];
  validateForm: FormGroup;
  isSpinning: boolean = false;
  noCategoriesFound: boolean = false;
  posts: any[] = [];

  constructor(
    private customerService: CustomerService,
    private fb: FormBuilder,
    private router: Router,
    private adminService: AdminService
  ) {}

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts() {
    this.posts = [];
    this.customerService.getAllPosts().subscribe(res => {
      res.forEach(element => {
        element.processedImg = 'data:image/jpeg;base64,' + element.byteImg;
        this.posts.push(element);
      });
    });
  }

  loadPosts(): void {
    this.customerService.getAllPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  approveAndPostPost(post: PostDTO): void {
    console.log('Début de la méthode approveAndPost pour le post ID:', post.id);
    this.adminService.approvePost(post.id).pipe(
      catchError(approvalError => {
        console.error('Erreur lors de l\'approbation du post:', approvalError);
        throw approvalError;
      })
    ).subscribe(approvalResponse => {
      console.log('Post approuvé avec succès:', approvalResponse);

      this.adminService.sendPost(approvalResponse.id).pipe(
        catchError(postError => {
          console.error('Erreur lors de l\'envoi du post:', postError);
          throw postError;
        })
      ).subscribe(postResponse => {
        console.log('Post envoyé avec succès:', postResponse);
        // Peut-être que vous devez effectuer d'autres actions après avoir approuvé et envoyé le post
      });
    });
  }

  RemovePost(post: PostDTO): void {
    this.adminService.removePost(post.id)
      .pipe(
        tap(() => {
          // Suppression réussie, mise à jour de la liste des posts
          this.getAllPosts();
        })
      )
      .subscribe({
        error: error => {
          // Gestion des erreurs
          console.error('Erreur lors de la suppression du post : ', error);
        }
      });
    }
}
