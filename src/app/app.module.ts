import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SettingsComponent } from './settings/settings.component';
import { SettingsListComponent } from './settings/settings-list/settings-list.component';
import { DevicesComponent } from './devices/devices.component';
import { DevicesListComponent } from './devices/devices-list/devices-list.component';
import { DevicesDetailComponent } from './devices/devices-detail/devices-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NotificationsComponent,
    SettingsComponent,
    SettingsListComponent,
    DevicesComponent,
    DevicesListComponent,
    DevicesDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
