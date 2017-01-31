import { TestBed, inject } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';

describe('a navbar component', () => {
	let component: NavbarComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				NavbarComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([NavbarComponent], (NavbarComponent) => {
		component = NavbarComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});