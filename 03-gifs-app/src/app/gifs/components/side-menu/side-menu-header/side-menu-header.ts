import { Component } from '@angular/core';
import { environment } from '@enviroments/environment';

@Component({
  selector: 'gifs-side-menu-header',
  imports: [],
  templateUrl: './side-menu-header.html',
})
export class SideMenuHeader {
  envs = environment;
}
