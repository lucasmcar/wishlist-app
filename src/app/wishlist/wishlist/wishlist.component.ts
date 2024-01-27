import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { WishList } from 'src/app/models/wishlist.model';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { WishlistService } from '../services/wishlist.service';


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {


  wishlist$: Observable<WishList[]>;

  

  //wishListService : WishlistService;

  constructor(private wishListService : WishlistService,
    public dialog : MatDialog,
    private router: Router,
    private route : ActivatedRoute){
    //this.wishListService = new WishlistService();
    this.wishlist$ = this.wishListService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar dados ')
        return of([])
      })
    );
  }

  ngOnInit(): void {

  }

  onAdd(){
    this.router.navigate(['new'], {relativeTo : this.route});
  }

  onError(errorMessage: string) : void {
    this.dialog.open(ErrorDialogComponent , {
      data : errorMessage
    });
  }


}
