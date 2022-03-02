import { TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { AppComponent } from './app.component'

describe('AppComponent', () => {
	let component: AppComponent
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [RouterTestingModule],
			declarations: [AppComponent],
		}).compileComponents()
	})

	beforeEach(() => {
		const fixture = TestBed.createComponent(AppComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create the app', () => {
		expect(component).toBeTruthy()
	})

	it(`should have as title 'angular-tdd'`, () => {
		expect(component.title).toEqual('angular-tdd')
	})
})
