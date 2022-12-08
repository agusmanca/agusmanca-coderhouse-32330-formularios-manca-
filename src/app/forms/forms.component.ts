import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  mainForm: FormGroup;
  isSubmit: boolean = false;

  public paises = [
    'Argentina', 'Brasil', 'Mexico', 'Peru', 'Colombia'
  ]

  constructor(public fb: FormBuilder) { 
      this.mainForm = this.fb.group({
        nombre: ['', [Validators.required]],
        apellido: ['', [Validators.required]],
        email: ['', [Validators.required]],
        telefono: [''],
        ciudad: [''],
        pais: [],
        vacuna: [false, [Validators.requiredTrue]],
        pasaporte: [false, [Validators.requiredTrue]],
        problema: [false, [Validators.requiredTrue]]
      });

      
  }

  ngOnInit(): void { 
  }

  public submit() {
      this.isSubmit = true;

      if(this.mainForm.valid) {
        swal("Formulario Enviado!", "Pronto te avisaremos sobre más noticias!", "success");
        this.isSubmit = false;
        this.mainForm.reset();
      } else {
        swal("Validacion erronea !", "Por favor revisa los campos ingresados, y vuelve a intentarlo!", "error");
      }
  }
}


