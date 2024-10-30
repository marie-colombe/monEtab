import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from '../../components/welcome/welcome.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-modifier-professeur',
  standalone: true,
  imports: [RouterModule,WelcomeComponent,ReactiveFormsModule,NgIf],
  templateUrl: './modifier-professeur.component.html',
  styleUrl: './modifier-professeur.component.css'
})
export class ModifierProfesseurComponent implements OnInit {
  formModifierProfesseur!: FormGroup;
  ngOnInit(): void {
    this.formModifierProfesseur = new FormGroup ({
      nom: new FormControl('',[Validators.required,Validators.minLength(455)]),
      prenom: new FormControl('',[Validators.required,Validators.minLength(15)]),
      date_naissance: new FormControl('',[Validators.required,Validators.minLength(15)]),
      matiere: new FormControl('',[Validators.required,Validators.minLength(455)]),
      telephone: new FormControl('',[Validators.required,Validators.minLength(15)]),
      ville: new FormControl('',[Validators.required,Validators.minLength(455)]),


    });
    // console.log(this.messageMessage.value)
  }
  isInvalidInput(field:AbstractControl){
    return field && field.invalid && (field.touched || field.dirty);
  }
}
