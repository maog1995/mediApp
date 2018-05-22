import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LauncherComponent} from './launcher/launcher.component';
import {TvComponent} from './launcher/tv/tv.component';
import {ViewComponent} from './launcher/tv/view/view.component';
import {RadioComponent} from './launcher/radio/radio.component';

const routes: Routes = [
    {path: '', component: LauncherComponent},
    {path: 'tv', component: TvComponent},
    {path: 'view', component: ViewComponent},
    {path: 'radio', component: RadioComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponents = [LauncherComponent, TvComponent, ViewComponent, RadioComponent];