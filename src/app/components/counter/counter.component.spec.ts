import { ComponentFixture, TestBed } from '@angular/core/testing'
import { CounterComponent } from './counter.component'
import { click, findByCss } from '../../utils/test-helpers'

describe('CounterComponent', () => {
	let component: CounterComponent
	let fixture: ComponentFixture<CounterComponent>
	const startCount = 0

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [CounterComponent],
		}).compileComponents()
	})

	beforeEach(() => {
		fixture = TestBed.createComponent(CounterComponent)
		component = fixture.componentInstance
		component.startCount = startCount
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})

	it('should start with 0', () => {
		expect(component.count).toBe(startCount)
	})

	// Verify that the counter output element exists
	it('should show the counter output', () => {
		const counterSelector = '[data-testid="counter"]'
		const counterElement = findByCss(fixture, counterSelector)
		expect(counterElement).toBeTruthy()
	})

	// Verify that the increment and decrement buttons exist
	it('should show the increment button', () => {
		const incrementSelector = '[data-testid="increment-button"]'
		const incrementButton = findByCss(fixture, incrementSelector)
		expect(incrementButton).toBeTruthy()
	})

	it('should show the decrement button', () => {
		const decrementSelector = '[data-testid="decrement-button"]'
		const decrementButton = findByCss(fixture, decrementSelector)
		expect(decrementButton).toBeTruthy()
	})

	// Verify that the reset input and button exist
	it('should show the reset input', () => {
		const resetInputSelector = '[data-testid="reset-input"]'
		const resetInput = findByCss(fixture, resetInputSelector)
		expect(resetInput).toBeTruthy()
	})

	it('should show the reset button', () => {
		const resetButtonSelector = '[data-testid="reset-button"]'
		const resetButton = findByCss(fixture, resetButtonSelector)
		expect(resetButton).toBeTruthy()
	})

	// Verify that the counter incrementation and decrementation work
	it('should increment the counter', () => {
		const incrementButtonSelector = '[data-testid="increment-button"]'
		const counterSelector = '[data-testid="counter"]'
		const counterOutput = findByCss(fixture, counterSelector)

		spyOn(component, 'increment').and.callThrough()

		click(fixture, incrementButtonSelector)
		fixture.detectChanges()

		expect(component.increment).toHaveBeenCalled()
		expect(counterOutput.nativeElement.textContent).toBe(
			String(component.startCount + 1)
		)
	})

	it('should decrement the counter', () => {
		const decrementButtonSelector = '[data-testid="decrement-button"]'
		const counterSelector = '[data-testid="counter"]'
		const counterOutput = findByCss(fixture, counterSelector)

		spyOn(component, 'decrement').and.callThrough()

		click(fixture, decrementButtonSelector)
		fixture.detectChanges()

		expect(component.decrement).toHaveBeenCalled()
		expect(counterOutput.nativeElement.textContent).toBe(
			String(component.startCount - 1)
		)
	})

	// Verify that the counter reset works
	it('should reset the counter', () => {
		const newCount = 10
		const resetButtonSelector = '[data-testid="reset-button"]'
		const resetInputSelector = '[data-testid="reset-input"]'
		const counterSelector = '[data-testid="counter"]'

		const counterOutput = findByCss(fixture, counterSelector)
		const resetInput = findByCss(fixture, resetInputSelector)

		spyOn(component, 'reset').and.callThrough()

		resetInput.nativeElement.value = newCount

		click(fixture, resetButtonSelector)
		fixture.detectChanges()

		expect(component.reset).toHaveBeenCalled()
		expect(counterOutput.nativeElement.textContent).toBe(String(newCount))
	})

	// Verify that the counter reset don't work with invalid input

	it('should not reset the counter with invalid input', () => {
		const newCount = 'not a number'
		const resetButtonSelector = '[data-testid="reset-button"]'
		const resetInputSelector = '[data-testid="reset-input"]'
		const counterSelector = '[data-testid="counter"]'

		const counterOutput = findByCss(fixture, counterSelector)
		const resetInput = findByCss(fixture, resetInputSelector)

		spyOn(component, 'reset').and.callThrough()

		resetInput.nativeElement.value = newCount

		click(fixture, resetButtonSelector)
		fixture.detectChanges()

		expect(component.reset).toHaveBeenCalled()
		expect(counterOutput.nativeElement.textContent).toBe(
			String(component.startCount)
		)
	})

	// Verify that the differents actions emit the correct value
	it('should emit the new count when increment is called', () => {
		let actualCount: number | undefined
		const incrementButtonSelector = '[data-testid="increment-button"]'

		component.countChange.subscribe((count) => (actualCount = count))

		click(fixture, incrementButtonSelector)
		fixture.detectChanges()

		expect(actualCount).toBe(component.startCount + 1)
	})

	it('should emit the new count when decrement is called', () => {
		let actualCount: number | undefined
		const decrementButtonSelector = '[data-testid="decrement-button"]'

		component.countChange.subscribe((count) => (actualCount = count))

		click(fixture, decrementButtonSelector)
		fixture.detectChanges()

		expect(actualCount).toBe(component.startCount - 1)
	})

	it('should emit the new count when reset is called', () => {
		let actualCount: number | undefined
		const newCount = 10
		const resetButtonSelector = '[data-testid="reset-button"]'
		const resetInputSelector = '[data-testid="reset-input"]'

		component.countChange.subscribe((count) => (actualCount = count))

		const resetInput = findByCss(fixture, resetInputSelector)
		resetInput.nativeElement.value = newCount

		click(fixture, resetButtonSelector)
		fixture.detectChanges()

		expect(actualCount).toBe(component.count)
	})
})
