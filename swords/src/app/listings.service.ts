import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Listing } from './types';
import {User} from './models/user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class ListingsService {
  baseurl: string = "http://localhost:8000";
  user = new User();

  constructor(
    private http: HttpClient,
  ) { }

  getListings(): Observable<Listing[]> {
    return this.http.get<Listing[]>('/api/listings');
  }

  getListingById(id: String): Observable<Listing> {
    return this.http.get<Listing>(`/api/listings/${id}`);
  }

  addViewToListing(id: string): Observable<Listing> {
    return this.http.post<Listing>(
      `/api/listings/${id}/add-view`, {}, httpOptions);
  }

  createListing(name: string, description: string, price: number): Observable<Listing> {
    return this.http.post<Listing>(`/api/listings`,
    { name, description, price }, httpOptions);
  }

  deleteListing(id: string): Observable<any> {
    return this.http.delete(`/api/listings/${id}`);
  }

  createUser(data: string): Observable<any> {
    return this.http.post(this.baseurl + '/addUser', data);
  }

  getUsers() {
    return this.http.get(`${this.baseurl}/getallUsers`);
  }

  setLoggedInUser(user: User){
    this.user = user;
  }

  getLoggedInUser(){
   return this.user;
  }

}
