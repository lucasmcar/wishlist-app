import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { WishList } from 'src/app/models/wishlist.model';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { WishlistService } from '../services/wishlist.service';


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {


  wishlist$: Observable<WishList[]> | null = null;



  //wishListService : WishlistService;

  constructor(private wishListService : WishlistService,
    public dialog : MatDialog,
    private router: Router,
    private route : ActivatedRoute,
    private snackbar: MatSnackBar){
    //this.wishListService = new WishlistService();
    this.refresh()
  }

  ngOnInit(): void {

  }

  onAdd() : void{
    this.router.navigate(['new'], {relativeTo : this.route});
  }

  private refresh (){
    this.wishlist$ = this.wishListService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar dados ')
        return of([])
      })
    );
  }

  onEdit(wishList: WishList) {
    this.router.navigate(['edit', wishList.wishListId], {relativeTo : this.route});
  }

  onDelete(wishList : WishList){

    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: 'Deseja confirmar a remoção dessa lista?',
    });

    dialogRef.afterClosed().subscribe((result : boolean) => {


      if(result){
        this.wishListService.delete(wishList.wishListId)
        .subscribe(
          () => {
            this.refresh();
            this.snackbar.open(
              'Lista apagada com sucesso',
              'Fechar', {
                duration: 5000,
                verticalPosition: 'top',
                horizontalPosition: 'center'
              });
          },
          () => this.onError('Erro ao tentar remover curso')
        );
      }


    });
  }

  onError(errorMessage: string) : void {
    this.dialog.open(ErrorDialogComponent , {
      data : errorMessage
    });
  }



}
