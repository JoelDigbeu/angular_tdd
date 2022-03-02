import { TestBed } from '@angular/core/testing'

import { CounterService } from './counter.service'

fdescribe('CounterService', () => {
	let service: CounterService

	beforeEach(() => {
		TestBed.configureTestingModule({})
		service = TestBed.inject(CounterService)
	})

	it('should be created', () => {
		expect(service).toBeTruthy()
	})

	it('should render the count value', () => {
		let actualCount: number | undefined
		let count = 0
		service.getCount().subscribe((countValue: number) => {
			actualCount = countValue
		})
		expect(actualCount).toBe(count)
	})

	it('should increment the count value', () => {
		let actualCount: number | undefined
		const count = 1
		service.increment()
		service.getCount().subscribe((countValue: number) => {
			actualCount = countValue
		})
		expect(actualCount).toBe(count)
	})

	it('should decrement the count value', () => {
		let actualCount: number | undefined
		const count = -1
		service.decrement()
		service.getCount().subscribe((countValue: number) => {
			actualCount = countValue
		})
		expect(actualCount).toBe(count)
	})

	it('should reset the count value', () => {
		let actualCount: number | undefined
		const count = 25
		service.reset(count)
		service.getCount().subscribe((countValue: number) => {
			actualCount = countValue
		})
		expect(actualCount).toBe(count)
	})
})
