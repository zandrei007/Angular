import { TestBed, inject } from '@angular/core/testing';

import { C1Component } from './c1.component';

describe('a c1 component', () => {
	let component: C1Component;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				C1Component
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([C1Component], (C1Component) => {
		component = C1Component;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});