import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from '../../../auth-services/storage-service/storage.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private SERVER_URL = "http://localhost:8081/api/customer/";

  constructor(private http: HttpClient) { }

  createPost(formData: FormData): Observable<any> {
    return this.http.post(this.SERVER_URL + "post", formData,{
      headers: this.createAuthorizationHeader(),
  })
}
getAllCategories(): Observable<any>{
  return this.http.get(this.SERVER_URL+ "cats",{
    headers: this.createAuthorizationHeader(),
  })
}
getAllTypes(): Observable<any>{
  return this.http.get(this.SERVER_URL+ "types",{
    headers: this.createAuthorizationHeader(),
  })
}



getAllPosts():Observable<any>{
  return this.http.get(this.SERVER_URL+"posts",{
    headers: this.createAuthorizationHeader()
  })
}
private createAuthorizationHeader(): HttpHeaders{
  return new HttpHeaders().set(
    'Authorization','Bearer' + StorageService.getToken()
  )
}
}