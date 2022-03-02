import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
	providedIn: 'root',
})
export class CounterService {
	private count = 0
	private subject = new BehaviorSubject<number>(0)
	constructor() {
		this.subject.next(this.count)
	}

	increment() {
		this.count++
		this.subject.next(this.count)
	}

	decrement() {
		this.count--
		this.subject.next(this.count)
	}

	reset(count: number) {
		this.count = count
		this.subject.next(this.count)
	}

	getCount() {
		return this.subject.asObservable()
	}
}
