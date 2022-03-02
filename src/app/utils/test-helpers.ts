import { DebugElement, Type } from '@angular/core'
import { ComponentFixture } from '@angular/core/testing'
import { By } from '@angular/platform-browser'

type InputTextAreaSelect =
	| HTMLInputElement
	| HTMLTextAreaElement
	| HTMLSelectElement

/**
 * Find element by css selector
 * @param fixture
 * @param selector
 * @returns DebugElement
 */
export function findByCss<T>(fixture: ComponentFixture<T>, selector: string) {
	return fixture.debugElement.query(By.css(selector))
}

/**
 * Find element by css selector
 * @param fixture
 * @param selector
 * @returns DebugElement[]
 */
export function findAllByCss<T>(
	fixture: ComponentFixture<T>,
	selector: string
) {
	return fixture.debugElement.queryAll(By.css(selector))
}

/**
 * Find component by directive
 * @param fixture
 * @param type
 * @returns DebugElement
 */
export function findByDirective<T>(
	fixture: ComponentFixture<T>,
	type: Type<any>
) {
	return fixture.debugElement.query(By.directive(type))
}

/**
 * Get element text content
 * @param fixture
 * @param selector
 * @returns string
 */
export function getText<T>(
	fixture: ComponentFixture<T>,
	selector: string
): string {
	return findByCss(fixture, selector).nativeElement.textContent
}

/**
 * Event dispatcher
 * @param element
 * @param type
 * @param bubbles
 */
export function dispatchEvent(
	element: EventTarget,
	type: string,
	bubbles = false
) {
	const event = new Event(type, { bubbles, cancelable: false })
	element.dispatchEvent(event)
}

/**
 * Set value to element (Input - TextArea - Select)
 * @param element
 * @param value
 */
function setFieldElementValue(element: InputTextAreaSelect, value: string) {
	element.value = value
	const isSelect = element instanceof HTMLSelectElement
	const type = isSelect ? 'change' : 'input'
	dispatchEvent(element, type, isSelect ? false : true)
}

/**
 * Set value to element (Input - TextArea - Select)
 * @param fixture
 * @param selector
 * @param value
 */
export function setFieldValue<T>(
	fixture: ComponentFixture<T>,
	selector: string,
	value: string
) {
	setFieldElementValue(findByCss(fixture, selector).nativeElement, value)
}

export function checkBoxField<T>(
	fixture: ComponentFixture<T>,
	selector: string,
	checked: boolean
) {
	const { nativeElement } = findByCss(fixture, selector)
	nativeElement.checked = checked
	dispatchEvent(nativeElement, 'change')
}

function makeClickEvent(target: EventTarget): Partial<MouseEvent> {
	return {
		preventDefault(): void {},
		stopPropagation(): void {},
		stopImmediatePropagation(): void {},
		type: 'click',
		target,
		currentTarget: target,
		bubbles: true,
		cancelable: true,
		button: 0,
	}
}

/**
 * Click Event
 * @param fixture
 * @param selector
 */
export function click<T>(fixture: ComponentFixture<T>, selector: string): void {
	const element = findByCss(fixture, selector)
	const event = makeClickEvent(element?.nativeElement)
	element.triggerEventHandler('click', event)
}

export function findComponent<T>(
	fixture: ComponentFixture<T>,
	selector: string
): DebugElement {
	return fixture.debugElement.query(By.css(selector))
}
