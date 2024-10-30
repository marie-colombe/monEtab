import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from '../../components/welcome/welcome.component';
import { FormGroup, FormControl, Validators, AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-ajouter-utilisateur',
  standalone: true,
  imports: [RouterModule,WelcomeComponent,NgIf,ReactiveFormsModule],
  templateUrl: './ajouter-utilisateur.component.html',
  styleUrl: './ajouter-utilisateur.component.css'
})
export class AjouterUtilisateurComponent implements OnInit {
  formAjouterUtilisateur!: FormGroup;
  ngOnInit(): void {
    this.formAjouterUtilisateur = new FormGroup ({
      pseudo: new FormControl('',[Validators.required,Validators.minLength(455)]),
      mot_de_passe: new FormControl('',[Validators.required,Validators.minLength(15)]),
      confirm: new FormControl('',[Validators.required,Validators.minLength(455)])
    });
   
  }
  isInvalidInput(field:AbstractControl){
    return field && field.invalid && (field.touched || field.dirty);
  }

}
