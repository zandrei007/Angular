import { TestBed, inject } from '@angular/core/testing';

import { SidebarComponent } from './sidebar.component';

describe('a sidebar component', () => {
	let component: SidebarComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				SidebarComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([SidebarComponent], (SidebarComponent) => {
		component = SidebarComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});