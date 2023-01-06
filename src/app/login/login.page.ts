import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  fromularioLogin: FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController) {
    this.fromularioLogin = this.fb.group({
      "correo": new FormControl("", Validators.required),
      "contraseña": new FormControl("", Validators.required),
    })
  }

  ngOnInit() {
  }

}
