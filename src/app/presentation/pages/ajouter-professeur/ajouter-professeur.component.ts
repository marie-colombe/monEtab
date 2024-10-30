import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from '../../components/welcome/welcome.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-ajouter-professeur',
  standalone: true,
  imports: [RouterModule,WelcomeComponent,ReactiveFormsModule,NgIf],
  templateUrl: './ajouter-professeur.component.html',
  styleUrl: './ajouter-professeur.component.css'
})
export class AjouterProfesseurComponent implements OnInit {

  formAjouterProfesseur!: FormGroup;
  ngOnInit(): void {
    this.formAjouterProfesseur = new FormGroup ({
      nom: new FormControl('',[Validators.required,Validators.minLength(455)]),
      prenom: new FormControl('',[Validators.required,Validators.minLength(15)]),
      sexe: new FormControl('',[Validators.required,Validators.minLength(15)]),
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
