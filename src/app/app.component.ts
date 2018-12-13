import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase/app";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  loadedFeature = "recipe";
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDnRp2cAQBjRQt2ylXsMYbEvw37VH-xMfQ",
      authDomain: "ng-recipe-book-332d2.firebaseapp.com"
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
