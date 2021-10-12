import { Component, Input, OnInit } from '@angular/core';

import { Toggle } from 'painel/shared/models/switches.model';

@Component({
  selector: 'sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.scss']
})
export class SubMenuComponent implements OnInit {

  @Input() toggle: boolean = false;
  @Input() itemName: string;

  public toggleSubItem = new Toggle();

  constructor() {}

  ngOnInit() {}

  public onActive(): void {
    (this.toggleSubItem.status)
    ? this.toggleSubItem.hide()
    : this.toggleSubItem.show();
  }

  public close(): void {
    this.toggleSubItem.hide();
  }
}
