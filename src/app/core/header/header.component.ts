import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { AuthService } from '../../auth/auth.service';
import { DataStorageService } from '../../shared/data-storage.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(
    private dataStorageSerivce: DataStorageService,
    public authService: AuthService
  ) {}

  onSaveData() {
    this.dataStorageSerivce
      .storeRecipes()
      .subscribe((response: HttpEvent<Object>) => {
        console.log(response.type === HttpEventType.Response);
      });
  }

  onFetchData() {
    this.dataStorageSerivce.getRecipes();
  }

  onLogout() {
    this.authService.logout();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}
