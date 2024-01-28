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

  private create(record: WishList){
    return this.httpClient.post<WishList>(this.API, record )
    .pipe(first());
  }

  save(record: WishList){
    if(record.wishListId){
      return this.update(record)
    }
    return this.create(record)
  }

  loadByid( id: string ) {
    return this.httpClient.get<WishList>(`${this.API}/${id}`)
  }

  private update( record:  WishList ){
    return this.httpClient.put<WishList>(`${this.API}/${record.wishListId}`, record).pipe(first());
  }
}
