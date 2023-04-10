import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Credentials } from '../models/credentials';
import { Item } from '../models/item';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  user:User = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    cardNumber: 0
  }

  items: Item[] = [];

  item: Item ={
    id: '',
    name: '',
    price: 0
  }

  login(credentials:Credentials):Observable<HttpResponse<User>>{
    
    return this.http.post("http://localhost:5000/revature/user/login", credentials, {observe:"response"}) as Observable<HttpResponse<User>>
  
  }

  signUp(user:User):Observable<HttpResponse<User>>{
    
    return this.http.post("http://localhost:5000/revature/user/signup", user, {observe:"response"}) as Observable<HttpResponse<User>>

  }

  allItems(): Observable<HttpResponse<Item>[]>{

    return this.http.get<Item[]>("http://localhost:5000/revature/item") as unknown as Observable<HttpResponse<Item>[]>
  
  }

  order(item:Item): Observable<HttpResponse<any>> {

    return this.http.post("http://localhost:5000/revature/user/order", item) as unknown as Observable<HttpResponse<any>>

  }


}
