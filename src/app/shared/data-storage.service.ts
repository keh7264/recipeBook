import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AuthService } from './../auth/auth.service';
import { Recipe } from './../recipes/recipe.model';
import { RecipeService } from './../recipes/recipe.service';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class DataStorageService {
  constructor(
    private httpClient: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  storeRecipes() {
    const token = this.authService.getToken();
    // const headers = new HttpHeaders().set(
    //   'Authorization',
    //   'Bearer afsdkflsdsk'
    // );

    return this.httpClient.put(
      'https://ng-recipe-book-332d2.firebaseio.com//recipes.json',
      this.recipeService.getRecipes(),
      {
        observe: 'body',
        params: new HttpParams().set('auth', token)
        // headers: headers
      }
    );
  }

  getRecipes() {
    const token = this.authService.getToken();

    this.httpClient
      .get<Recipe[]>(
        'https://ng-recipe-book-332d2.firebaseio.com//recipes.json?auth=' +
          token
      )
      .pipe(
        map(recipes => {
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              console.log(recipe);
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        })
      )
      .subscribe((recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      });
  }
}
