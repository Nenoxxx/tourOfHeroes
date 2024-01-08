// contact.service.ts

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Contact} from "../declarations";

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  getContactData(): Observable<Contact> {
    return of({
      company: "Bison Schweiz AG",
      name: "Edon Malushaj",
      email: "edon_malushaj@hotmail.com",
    });
  }
}
