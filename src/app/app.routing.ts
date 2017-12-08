import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { ValueVerifyComponent } from './value-verify/value-verify.component';
import { EvenVerifyComponent } from './even-verify/even-verify.component';
import { TrioVerifyComponent } from './trio-verify/trio-verify.component';
import { QuadraVerifyComponent } from './quadra-verify/quadra-verify.component';
import { SequencyVerifyComponent } from './sequency-verify/sequency-verify.component';
import { FullHouseVerifyComponent } from './full-house-verify/full-house-verify.component';
import { AuroraVerifyComponent } from './aurora-verify/aurora-verify.component';
import { JogadaComponent } from './jogada/jogada.component';

const APP_ROUTES: Routes = [
    { path: '', component: JogadaComponent},
    { path: 'uns/:valor', component: ValueVerifyComponent},
    { path: 'dois/:valor', component: ValueVerifyComponent},
    { path: 'tres/:valor', component: ValueVerifyComponent},
    { path: 'quatros/:valor', component: ValueVerifyComponent},
    { path: 'cincos/:valor', component: ValueVerifyComponent},
    { path: 'seis/:valor', component: ValueVerifyComponent},
    { path: 'par/:valor', component: EvenVerifyComponent},
    { path: 'dois-par/:valor', component: EvenVerifyComponent},
    { path: 'trio', component: TrioVerifyComponent},
    { path: 'quadra', component: QuadraVerifyComponent},
    { path: 'sequencia-menor/:valor', component: SequencyVerifyComponent},
    { path: 'sequencia-maior/:valor', component: SequencyVerifyComponent},
    { path: 'full-house', component: FullHouseVerifyComponent},
    { path: 'aurora', component: AuroraVerifyComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);