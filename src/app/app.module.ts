import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { JogadaComponent } from './jogada/jogada.component';
import { ValueVerifyComponent } from './value-verify/value-verify.component';
import { EvenVerifyComponent } from './even-verify/even-verify.component';
import { TrioVerifyComponent } from './trio-verify/trio-verify.component';
import { QuadraVerifyComponent } from './quadra-verify/quadra-verify.component';
import { SequencyVerifyComponent } from './sequency-verify/sequency-verify.component';
import { FullHouseVerifyComponent } from './full-house-verify/full-house-verify.component';
import { TrioEvenService } from './trio-even.service';
import { JogadaService } from './jogada.service';
import { AuroraVerifyComponent } from './aurora-verify/aurora-verify.component';
import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    JogadaComponent,
    ValueVerifyComponent,
    EvenVerifyComponent,
    TrioVerifyComponent,
    QuadraVerifyComponent,
    SequencyVerifyComponent,
    FullHouseVerifyComponent,
    AuroraVerifyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [JogadaService, TrioEvenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
