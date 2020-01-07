import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TurnComponent } from './turn/turn.component';
import { ValueVerifyComponent } from './value-verify/value-verify.component';
import { EvenVerifyComponent } from './even-verify/even-verify.component';
import { TrioVerifyComponent } from './trio-verify/trio-verify.component';
import { QuadraVerifyComponent } from './quadra-verify/quadra-verify.component';
import { SequencyVerifyComponent } from './sequency-verify/sequency-verify.component';
import { FullHouseVerifyComponent } from './full-house-verify/full-house-verify.component';
import { AuroraVerifyComponent } from './aurora-verify/aurora-verify.component';
import { TurnService } from './turn.service';
import { TrioEvenService } from './trio-even.service';

@NgModule({
  declarations: [
    AppComponent,
    TurnComponent,
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
    AppRoutingModule,
    FormsModule
  ],
  providers: [ TurnService, TrioEvenService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
