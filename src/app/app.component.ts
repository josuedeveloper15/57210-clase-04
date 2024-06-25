import { Component } from '@angular/core';

enum EstadoPago {
  Aceptado,
  Rechazado,
  Pendiente,
  Demorado,
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

  alternarParrafo() {
    console.log('Here!');

    this.mostrarParrafo = !this.mostrarParrafo;
  }
}
