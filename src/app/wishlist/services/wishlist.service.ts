import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WishList } from 'src/app/models/wishlist.model';
import { tap, first } from 'rxjs/operators';


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
}
