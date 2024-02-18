import { Component } from '@angular/core';

@Component({
  // selector: 'app-servers',
  // selector: '[app-servers]',
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  // templateUrl: `
  // <app-server></app-server>
  // <app-server></app-server>`,
  // styleUrl: './servers.component.css'
  styles: [`
  h3{
    color :blue;
  }
  `]
})
export class ServersComponent {

}
