import { TestBed, inject } from '@angular/core/testing';

import { TopnavComponent } from './topnav.component';

describe('a topnav component', () => {
	let component: TopnavComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				TopnavComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([TopnavComponent], (TopnavComponent) => {
		component = TopnavComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});