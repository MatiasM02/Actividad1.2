import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController) {
    this.formularioRegistro = this.fb.group({
      "correo": new FormControl("", Validators.required),
      "contraseña": new FormControl("", Validators.required),
      "confirmarContraseña": new FormControl("", Validators.required)
    })

   }

  ngOnInit() {
  }

}
