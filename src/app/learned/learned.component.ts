import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Contact} from "../../declarations";
import {ContactService} from "../contact.service";

@Component({
  selector: 'app-learned',
  templateUrl: './learned.component.html',
  styleUrls: ['./learned.component.scss']
})
export class LearnedComponent {
  contactData$: Observable<Contact> | undefined;

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contactData$ = this.contactService.getContactData();
  }
}
