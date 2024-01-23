import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WishList } from 'src/app/models/wishlist.model';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  private readonly API = 'localhost/wishlist' 

  constructor(private httpClient : HttpClient) { }

  list()  {
    return this.httpClient.get<WishList[]>(this.API);
  }
}
