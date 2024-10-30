import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from '../../components/welcome/welcome.component';
import { FormGroup, FormControl, Validators, AbstractControl, ReactiveFormsModule } from '@angular/forms';

import { NgIf } from '@angular/common';


@Component({
  selector: 'app-modifier-utilisateur',
  standalone: true,
  imports: [RouterModule,WelcomeComponent,NgIf,ReactiveFormsModule],
  templateUrl: './modifier-utilisateur.component.html',
  styleUrl: './modifier-utilisateur.component.css'
})
export class ModifierUtilisateurComponent implements OnInit  {
  formModifierUtilisateur!: FormGroup;
  ngOnInit(): void {
    this.formModifierUtilisateur = new FormGroup ({
      pseudo: new FormControl('',[Validators.required,Validators.minLength(455)]),
      ancien: new FormControl('',[Validators.required,Validators.minLength(15)]),
      nouveau: new FormControl('',[Validators.required,Validators.minLength(15)]),
      confirm: new FormControl('',[Validators.required,Validators.minLength(455)])
    });
   
  }
  isInvalidInput(field:AbstractControl){
    return field && field.invalid && (field.touched || field.dirty);
  }
}
