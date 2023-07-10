import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import  firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    public afAuth: AngularFireAuth
  ) { }

  async register(email: string, password: string): Promise<any> {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  async login(email: string, password: string): Promise<any> {  
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }
  
  async loginWithGoogle(): Promise<any> {
    return this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
}

