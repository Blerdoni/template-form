import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'], // Add this line to link the CSS file
})

export class FormComponent {
  constructor(private router: Router) {}

  onSubmit() {
    this.router.navigate(['/confirmation']);
  }
  formData = {
    name: '',
    email: ''
  };
  
}
