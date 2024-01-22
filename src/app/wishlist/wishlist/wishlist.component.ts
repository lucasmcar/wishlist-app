import { Component, OnInit } from '@angular/core';
import { WishList } from 'src/app/models/wishlist.model';
import { WishlistService } from '../services/wishlist.service';


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {


  wishlist : WishList[] = [];

  displayedColumns = ["item", "link"];

  //wishListService : WishlistService;

  constructor(private wishListService : WishlistService){
    //this.wishListService = new WishlistService();
  }

  ngOnInit(): void {
    this.wishlist = this.wishListService.list();
  }


}
