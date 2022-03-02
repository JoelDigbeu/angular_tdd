import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
	selector: 'app-counter',
	templateUrl: './counter.component.html',
	styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
	@Input()
	startCount: number = 0

	@Output()
	countChange = new EventEmitter<number>()

	public count: number = 0

	constructor() {}

	ngOnInit(): void {
		this.count = this.startCount
	}

	increment() {
		this.count++
		this.notity()
	}

	decrement() {
		this.count--
		this.notity()
	}

	reset(newCount: string) {
		const count = parseInt(newCount, 10)
		if (!isNaN(count)) {
			this.count = count
			this.notity()
		}
	}

	notity() {
		this.countChange.emit(this.count)
	}
}
