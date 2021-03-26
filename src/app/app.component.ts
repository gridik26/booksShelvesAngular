import { Component } from '@angular/core';
import  firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bookshelves-Angular';

  constructor() {
    var firebaseConfig = {
      apiKey: "AIzaSyB-7UR0sBBFtMMo88XYYqvrIymyFpadjh4",
      authDomain: "bookshelves-angular-11648.firebaseapp.com",
      projectId: "bookshelves-angular-11648",
      storageBucket: "bookshelves-angular-11648.appspot.com",
      messagingSenderId: "265360532696",
      appId: "1:265360532696:web:8c353f12ee42a93ffee3ad"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
  }
}
