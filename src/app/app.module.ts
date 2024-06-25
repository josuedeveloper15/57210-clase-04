import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResaltadoDirective } from './directives/resaltado.directive';

import { FormsModule } from '@angular/forms';

// Cambiar IDIOMA de date pipe / currency
import { registerLocaleData } from '@angular/common';
import esAR from '@angular/common/locales/es-AR';

registerLocaleData(esAR);

@NgModule({
  declarations: [AppComponent, ResaltadoDirective],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [{ provide: LOCALE_ID, useValue: 'es-AR' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
