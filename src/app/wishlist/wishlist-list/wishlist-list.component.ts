import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WishList } from 'src/app/models/wishlist.model';

@Component({
  selector: 'app-wishlist-list',
  templateUrl: './wishlist-list.component.html',
  styleUrls: ['./wishlist-list.component.css']
})
export class WishlistListComponent implements OnInit {

  readonly displayedColumns = ["item", "link", "actions"];
  @Input() wishlist : WishList[] = [];
  @Output() add = new EventEmitter()
  @Output() edit = new EventEmitter()

  constructor(){

  }

  ngOnInit(): void {

  }

  onAdd() : void{
    this.add.emit(true);
  }

  onEdit(wishList: WishList) : void {
    this.edit.emit(wishList);
  }

}
