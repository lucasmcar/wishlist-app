import { Component } from '@angular/core';
import { ControlContainer, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-wishlist-form',
  templateUrl: './wishlist-form.component.html',
  styleUrls: ['./wishlist-form.component.css']
})
export class WishlistFormComponent {

  form: FormGroup;
  cardTitle = "Cadastro de item";

  constructor(private formBuilder: FormBuilder){
    this.form = this.formBuilder.group({
      item: [null],
      link: [null]
    });
  }

  clear(){
    
  }
}
