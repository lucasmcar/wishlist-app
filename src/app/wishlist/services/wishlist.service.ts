import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WishList } from 'src/app/models/wishlist.model';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private httpClient : HttpClient) { }

  list() : WishList[] {
    return [{wishListId : 1, item : "teste", link : "teste" }];
  }
}
