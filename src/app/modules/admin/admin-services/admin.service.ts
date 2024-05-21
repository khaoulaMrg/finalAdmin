import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../../../post.model';
import { StorageService } from '../../../auth-services/storage-service/storage.service';

export interface PostDTO {
  id: number;
  name: string;
  content: string;
  postedBy: string;
  date: Date;
  approved: boolean;
  posted: boolean;
  byteImg: string;
  categoryId: number;
}

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private SERVER_URL = "http://localhost:8081/api/customer/";

  constructor(private http: HttpClient) { }

  addCategory(categoryDto: any): Observable<any> {
    console.log('Appel API pour ajouter une catégorie', categoryDto);
    return this.http.post(this.SERVER_URL + 'cat', categoryDto, {
      headers: this.createAuthorizationHeader(),
    });
  }

  private createAuthorizationHeader(): HttpHeaders {
    return new HttpHeaders().set('Authorization', 'Bearer ' + StorageService.getToken());
  }

  getApprovedPost(id: number): Observable<PostDTO> {
    const url = `${this.SERVER_URL}post/${id}/approved`;
    console.log('Appel API pour obtenir un post approuvé', url);
    return this.http.get<PostDTO>(url);
  }

  approvePost(id: number): Observable<PostDTO> {
    console.log('Appel API pour approuver un post', id);
    return this.http.put<PostDTO>(`${this.SERVER_URL}post/${id}/approve`, {});
  }
 

  reapproveAndRepostPost(postId: number): Observable<Post> {
    console.log('Appel API pour réapprouver et reposter un post', postId);
    return this.http.put<Post>(`${this.SERVER_URL}post/${postId}/reapprove-repost`, {});
  }

  sendPost(postId: number): Observable<Post> {
    const url = `${this.SERVER_URL}post/${postId}/send`;
    console.log('Appel API pour envoyer un post', url);
    return this.http.post<Post>(url, null);
  }
}
