import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './components/home/home.component'
import { ServiceCounterComponent } from './components/service-counter/service-counter.component'

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'service-counter', component: ServiceCounterComponent },
	{ path: '**', redirectTo: '' },
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
