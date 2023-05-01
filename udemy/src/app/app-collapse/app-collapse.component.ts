import { Component } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-collapse',
  templateUrl: './app-collapse.component.html',
  styleUrls: ['./app-collapse.component.css']
})
export class AppCollapseComponent {
  public isCollapsed = false;
}