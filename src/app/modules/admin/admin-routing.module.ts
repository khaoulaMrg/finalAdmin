import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin-components/dashboard/dashboard.component';
import { CategoryComponent } from './admin-components/category/category.component';
import { TypeComponent } from './admin-components/type/type.component';


  const routes: Routes = [ {path:"dashboard",component:DashboardComponent},
  {path:"category",component:CategoryComponent},
  {path:"type",component:TypeComponent},


  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
