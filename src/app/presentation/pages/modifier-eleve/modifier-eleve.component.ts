import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormGroup, FormControl, Validators, AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-modifier-eleve',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule,NgIf],
  templateUrl: './modifier-eleve.component.html',
  styleUrl: './modifier-eleve.component.css'
})
export class ModifierEleveComponent implements OnInit{

  formModifierEleve!: FormGroup;
  ngOnInit(): void {
    this.formModifierEleve = new FormGroup ({
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


