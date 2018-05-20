import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LauncherComponent} from './launcher/launcher.component';
import {TvComponent} from './launcher/tv/tv.component';
import {RadioComponent} from './launcher/radio/radio.component';

const routes: Routes = [
    {path: '', component: LauncherComponent},
    {path: 'tv', component: TvComponent},
    {path: 'radio', component: RadioComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponents = [LauncherComponent, TvComponent, RadioComponent];