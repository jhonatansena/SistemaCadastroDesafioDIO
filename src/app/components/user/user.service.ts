import { User } from './../../views/home/home/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:3000/usuarios/'

  

  constructor(private http: HttpClient) { }

read(): Observable<User[]>{
  return this.http.get<User[]>(this.url);

}

readByID(id: number): Observable<User>{
  const link = `${this.url}/${id}`;
  console.log(id)  
  return this.http.get<User>(link);
} 

create(user: User): Observable<User>{

  return this.http.post<User>(this.url, user)

}


update(user: User): Observable<User>{
  const link = `${this.url}/${user.id}`;
  console.log('Estou no update Service')

  return this.http.put<User>(link, user);
}

delete(id: any): Observable<User>{
  const link = `${this.url}/${id}`;
  return this.http.delete<User>(link); 
}


}
