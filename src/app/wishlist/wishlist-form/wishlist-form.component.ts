import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      item: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(100)]],
      link: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(150)]]
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

  getErrorMessage(fieldName: string) {
    const field = this.form.get(fieldName);
      if(field?.hasError('required')){
        return 'Campo obrigaório';
      }

      if(field?.hasError('minlength')){
        const requiredLength = field.errors ? field.errors['minlength']['requiredLength'] : 10;

        return `Tamanho minimo: ${requiredLength} caracteres`;
      }

      if(field?.hasError('maxlength')){
        const requiredLength = field.errors ? field.errors['maxlength']['requiredLength'] : 100;

        return `Tamanho máximo: ${requiredLength} caracteres`;
      }


      return 'Campo Inválido';
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
