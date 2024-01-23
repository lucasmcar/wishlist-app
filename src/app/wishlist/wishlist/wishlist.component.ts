import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WishList } from 'src/app/models/wishlist.model';
import { WishlistService } from '../services/wishlist.service';


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {


  wishlist: Observable<WishList[]>;

  displayedColumns = ["item", "link"];

  //wishListService : WishlistService;

  constructor(private wishListService : WishlistService){
    //this.wishListService = new WishlistService();
    this.wishlist = this.wishListService.list();
  }

  ngOnInit(): void {
    
  }


}
