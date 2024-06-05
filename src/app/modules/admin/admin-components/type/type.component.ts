import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from '../../admin-services/admin.service';
import { Router } from '@angular/router';
import { User } from '../../../../cat.model';
import { CatService } from '../../../../auth-components/cat/cat-services/cat.service';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrl: './type.component.css'
})
export class TypeComponent implements OnInit {

  users: User[];

  constructor(private catService: CatService) { }

  ngOnInit(): void {
    this.catService.getUsers().subscribe({
      next: (users: User[]) => {
        this.users = users;
      },
      error: (error: any) => {
        console.error('Erreur lors de la récupération des utilisateurs:', error);
      }
    });
  }


  deleteUser(userId: number): void {
    if (confirm("Êtes-vous sûr de vouloir supprimer cet utilisateur?")) {
        this.catService.deleteUser(userId).subscribe(
            {
                next: () => {
                    // Actualiser la liste des utilisateurs après la suppression
                    this.users = this.users.filter(user => user.id !== userId);
                },
                error: error => {
                    console.error('Erreur lors de la suppression de l\'utilisateur:', error);
                }
            }
        );
    }
  }}