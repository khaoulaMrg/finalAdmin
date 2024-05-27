import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './admin-components/dashboard/dashboard.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CategoryComponent } from './admin-components/category/category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TypeComponent } from './admin-components/type/type.component';


@NgModule({
  declarations: [
    DashboardComponent,
    CategoryComponent,
    TypeComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  imports: [
    CommonModule,
    AdminRoutingModule,MatCardModule,MatButtonModule,MatInputModule,
    ReactiveFormsModule,
    MatInputModule,FormsModule,HttpClientModule,FormsModule
  ]
})
export class AdminModule { }
