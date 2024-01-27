import { Component, Input, OnInit } from '@angular/core';
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

  constructor(private router : Router, private route: ActivatedRoute){

  }

  ngOnInit(): void {

  }

  onAdd() : void{
    this.router.navigate(['new'], {relativeTo : this.route})
  }

}
