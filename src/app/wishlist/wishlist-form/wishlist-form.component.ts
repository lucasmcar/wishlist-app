import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { WishList } from 'src/app/models/wishlist.model';
import { WishlistService } from '../services/wishlist.service';

@Component({
  selector: 'app-wishlist-form',
  templateUrl: './wishlist-form.component.html',
  styleUrls: ['./wishlist-form.component.css']
})
export class WishlistFormComponent implements OnInit{

  form: FormGroup;
  cardTitle = "Cadastro de Items";

  constructor(private formBuilder: FormBuilder,
    private snackbar: MatSnackBar,
    private location: Location,
    private serviceWishlist : WishlistService,
    private route : ActivatedRoute){
    this.form = this.formBuilder.group({
      wishListId: [''],
      item: [''],
      link: ['']
    });
  }
  ngOnInit(): void {
    const wishList : WishList = this.route.snapshot.data['wishlist'];
    this.form.setValue({
      wishListId : wishList.wishListId,
      item : wishList.item,
      link : wishList.link
    });
  }

  clear(){

  }

  onSuccess(){
    this.snackbar.open("Lista salva com sucesso", "Fechar", {
      duration: 3000
    });
    this.location.back();
  }

  save(){
    this.serviceWishlist.save(this.form.value).subscribe(
      result => this.onSuccess(), error => {
        this.snackbar.open("Aconteceu um erro", "Fechar", {
          duration: 3000
        })
      });

  }
}
