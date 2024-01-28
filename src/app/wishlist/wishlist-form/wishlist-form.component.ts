import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ControlContainer, FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { WishlistService } from '../services/wishlist.service';

@Component({
  selector: 'app-wishlist-form',
  templateUrl: './wishlist-form.component.html',
  styleUrls: ['./wishlist-form.component.css']
})
export class WishlistFormComponent {

  form: FormGroup;
  cardTitle = "Cadastro de Items";

  constructor(private formBuilder: FormBuilder,
    private snackbar: MatSnackBar,
    private location: Location,
    private serviceWishlist : WishlistService){
    this.form = this.formBuilder.group({
      wishlistId : [''],
      item: [''],
      link: ['']
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
    this.serviceWishlist.create(this.form.value).subscribe(
      result => this.onSuccess(), error => {
        this.snackbar.open("Aconteceu um erro", "Fechar", {
          duration: 3000
        })
      });

  }
}
