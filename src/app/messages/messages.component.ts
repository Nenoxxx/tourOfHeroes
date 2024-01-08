import {Component, Injectable} from '@angular/core';
import {MessageService} from "../message.service";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})

@Injectable({
  providedIn: 'root',
})
export class MessagesComponent {
  constructor(public messageService: MessageService) {
  }

}
