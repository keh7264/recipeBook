import { AuthGuard } from './../auth/auth.guard';
import { AuthService } from './../auth/auth.service';
import { DataStorageService } from './../shared/data-storage.service';
import { RecipeService } from './../recipes/recipe.service';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from './../app-routing.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [SharedModule, AppRoutingModule],
  declarations: [HeaderComponent, HomeComponent],
  exports: [AppRoutingModule, HeaderComponent],
  providers: [
    RecipeService,
    DataStorageService,
    AuthService
  ]
})
export class CoreModule { }
