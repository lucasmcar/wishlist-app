import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { WishList } from 'src/app/models/wishlist.model';
import { WishlistService } from '../services/wishlist.service';

@Injectable({
  providedIn: 'root'
})
export class WishlistResolverResolver {


  constructor(private wishlistService : WishlistService){

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<WishList> {
    if(route.params && route.params['id']){
      return this.wishlistService.loadByid(route.params['id'])
    }
    return of({wishListId : '' , item : '', link : ''});
  }
}
