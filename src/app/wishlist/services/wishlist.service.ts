import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs/operators';
import { WishList } from 'src/app/models/wishlist.model';


@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  private readonly API = 'api/wishlist'

  constructor(private httpClient : HttpClient) { }

  list()  {
    return this.httpClient.get<WishList[]>(this.API)
    .pipe(
      first(),
      tap(wishlists => wishlists),
    );
  }

  create(record: WishList){
    return this.httpClient.post<WishList>(this.API, record )
    .pipe(first());
  }

  loadByid( id: string ) {
    return this.httpClient.get<WishList>(`${this.API}/${id}`)
  }
}
