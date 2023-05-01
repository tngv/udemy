import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-accordion',
	standalone: true,
	imports: [NgbAccordionModule],
	templateUrl: './app-accordion.component.html',
})
export class AppAccordionComponent {}