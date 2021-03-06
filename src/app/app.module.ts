import { HttpClientModule } from '@angular/common/http';
import { Compiler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JitCompilerFactory } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material-module';
import { NotFoundComponent } from './not-found/not-found.component';
import { PocArquiteturaModule } from 'poc-arquitetura';
import { of } from 'rxjs';
import { AppService } from './app.service';

export function createJitCompiler() {
  return new JitCompilerFactory().createCompiler();
}

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PocArquiteturaModule.forRoot(of({ clientID: 123, employee: 'Alvaro', org: { id: 1 } })),
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: Compiler, useFactory: createJitCompiler },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private appService: AppService) { }



}
