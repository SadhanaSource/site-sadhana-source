// Angular
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Interfaces
import { Toggle } from 'app/interfaces/switches.interface';

// Services

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public toggleMenu = new Toggle();

  constructor(
    private router: Router,
  ) {}

  ngOnInit() {
  }

  public onToggleClick( event: boolean ): void {
    (event)
    ? this.toggleMenu.show()
    : this.toggleMenu.hide();
  }

  public logout(): void {
  }

}
