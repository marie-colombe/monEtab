import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { WelcomeComponent } from '../../components/welcome/welcome.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-ajouter-eleve',
  standalone: true,
  imports: [RouterModule,WelcomeComponent,ReactiveFormsModule,NgIf],
  templateUrl: './ajouter-eleve.component.html',
  styleUrl: './ajouter-eleve.component.css'
})
export class AjouterEleveComponent implements OnInit {

  formAjouterEleve!: FormGroup;
  ngOnInit(): void {
    this.formAjouterEleve = new FormGroup ({
      first_name: new FormControl('',[Validators.required,Validators.minLength(455)]),
      last_name: new FormControl('',[Validators.required,Validators.minLength(15)]),
      city: new FormControl('',[Validators.required,Validators.minLength(455)]),
      level: new FormControl('',[Validators.required,Validators.minLength(455)]),
      date_birth: new FormControl('',[Validators.required,Validators.minLength(15)]),
      registration: new FormControl('',[Validators.required,Validators.minLength(455)]),
      phone: new FormControl('',[Validators.required,Validators.minLength(15)]),
      sex: new FormControl('',[Validators.required,Validators.minLength(455)]),


    });
    // console.log(this.messageMessage.value)
  }
  isInvalidInput(field:AbstractControl){
    return field && field.invalid && (field.touched || field.dirty);
  }

}


  

 