import { Component } from '@angular/core';

enum EstadoPago {
  Aceptado,
  Rechazado,
  Pendiente,
  Demorado,
}

interface Alumno {
  nombre: string;
  estaAprobado: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'clase-04-interpolacion';
  edad = 30;
  hayError = true;
  frutas = ['Manzana', 'Pera', 'Banana'];
  mostrarParrafo = false;

  estadoPagoEnum = EstadoPago;
  estadoPago: EstadoPago = EstadoPago.Demorado; // 'Aceptado' | 'Rechazado' | 'Pendiente'

  inputType: 'password' | 'text' = 'password';

  loginForm = {
    password: '123456',
  };

  nombreUsuario = 'Homero Simpson';
  sueldo = 5000;
  fechaNacimiento = new Date('1960-01-01');

  alumnos: Alumno[] = [
    {
      nombre: 'Naruto',
      estaAprobado: false,
    },
    {
      nombre: 'Sasuke',
      estaAprobado: true,
    },
  ];

  alternarParrafo() {
    console.log('Here!');
    this.mostrarParrafo = !this.mostrarParrafo;
  }

  alternarTipo() {
    this.inputType = this.inputType === 'password' ? 'text' : 'password';
  }
}
