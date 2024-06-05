import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../../cat.model';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  private SERVER_URL = "http://localhost:8081/api/customer/customers"; // Utilisez l'URL correcte pour récupérer les clients

  constructor(private http: HttpClient) { }
  
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.SERVER_URL);
}

deleteUser(userId: number): Observable<void> {
  return this.http.delete<void>(`${this.SERVER_URL}/${userId}`);
}
}