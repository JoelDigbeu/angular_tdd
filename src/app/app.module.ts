import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { HomeComponent } from './components/home/home.component'
import { CounterComponent } from './components/counter/counter.component'
import { ServiceCounterComponent } from './components/service-counter/service-counter.component'
import { AppRoutingModule } from './app-routing.module'

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		CounterComponent,
		ServiceCounterComponent,
	],
	imports: [BrowserModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
