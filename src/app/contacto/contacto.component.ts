import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  contactForm: FormGroup;

  constructor(private httpClient: HttpClient, private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }
  enviarCorreo() {
    if (this.contactForm.valid) {
      const params = this.contactForm.value;
      this.httpClient.post('http://localhost:3000/enviar', params, { responseType: 'text' }).subscribe({
        next: (response) => {
          console.log('Correo enviado con éxito:', response);
          alert('Correo enviado con éxito');
          this.contactForm.reset()
        },
        error: (error) => {
          console.error('Error al enviar el correo:', error);
          alert('Error al enviar el correo');
        }
      });
    } else {
      alert('Por favor, completa todos los campos.');
    }
  }


}