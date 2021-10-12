// Angular
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  QueryList,
  SimpleChanges,
  ViewChildren
} from '@angular/core';

// Externals
import { faCog, faUser } from '@fortawesome/free-solid-svg-icons';

// Services

// Interfaces

// Helpers
import { Toggle } from 'app/interfaces/switches.interface';

// Component
import { SubMenuComponent } from './sub-menu/sub-menu.component';

@Component({
  selector: 'menu-dash',
  templateUrl: './menu-dash.component.html',
  styleUrls: ['./menu-dash.component.scss']
})
export class MenuDashComponent implements OnInit, OnChanges {

  @Input() toggle: boolean = false;

  @Output() onClose: EventEmitter<void> = new EventEmitter();
  @Output() logout: EventEmitter<void> = new EventEmitter();

  @ViewChildren(SubMenuComponent) subMenuList: QueryList<SubMenuComponent>;

  // public user: User;
  // public permissions: Permissions;

  public fontAwesome = {
    faCog: faCog,
    faUser: faUser,
  };

  public toggleUserOption = new Toggle();

  constructor(
    // private userManager: UserManagerService,
  ) {
    this._setInitialValues();
  }

  ngOnInit() {}

  ngOnChanges(change: SimpleChanges) {
    if (!change.toggle.currentValue) this._collapseMenu();
  }

  private _setInitialValues(): void {
    // this.user = this.userManager.user;
    // if (!!this.user) this.permissions = this.userManager.user.permissions;
  }

  private _collapseMenu(): void {
    this.onClose.emit();

    if (!!this.subMenuList) this.subMenuList.forEach(_ => _.close());
  }

  public onSelectItem(): void {
    this._collapseMenu();
  }

  public onLogout(): void {
    this.onClose.emit();
    this.logout.emit();
  }

  public onUserOption(): void {
    this.onClose.emit();
    this.toggleUserOption.show();
  }

}
