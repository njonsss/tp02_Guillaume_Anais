import { Component, OnInit } from '@angular/core';

import {User } from '../user';
//import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-form-inscription',
  templateUrl: './form-inscription.component.html',
  styleUrls: ['./form-inscription.component.css']
})
export class FormInscriptionComponent implements OnInit {
  ///Property for the gender
  gender: string[];
  //Property for the user
  user: User;

  ngOnInit() {
    this.gender = ['Male', 'Female', 'Others'];

    //Create a new user object
    this.user = new User({Lastname:"", Firstname:"", Address:"",City:"",Zipcode:"",Country:"",email: "", phone: "", password: {pwd: "", confirmPwd: ""}, gender: this.gender[0]});
  }

  log(object) {
    console.log(object);
  }

  onFormSubmit({value, valid}: { value: User, valid: boolean }) {
    this.user = value;
    console.log(this.user);
    console.log("valid: " + valid);
  }
}
//Utilisation du formulaire model
   /* this.forminscription = this.fb.group({
      phone: ['', [Validators.required,
         Validators.pattern('[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}')]],

      email: ['', [Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],

      password: this.fb.group({
        pwd: ['', [Validators.required, Validators.minLength(8)]],
        confirmPwd: ['', [Validators.required, Validators.minLength(8)]]
      }),
      gender: ['', Validators.required],
      terms: ['', Validators.requiredTrue]
    })*/


 /* get Lastname() {return this.forminscription.get('Lastname');}
  get Firstname() {return this.forminscription.get('Firstname');}
  get Ville() {return this.forminscription.get('Ville');}
  get Phone() {return this.forminscription.get('Phone');}
  get Address() {return this.forminscription.get('Address');}
  get ZipCode(){return this.forminscription.get('ZipCode');}
  get email(){return this.forminscription.get('email');}
  get password(){return this.forminscription.get('password');}
  get gender(){return this.forminscription.get('gender');}
  get terms () {return this.forminscription.get('terms');}
*/

