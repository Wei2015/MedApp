import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef} from '@angular/material';
import {MessageListComponent} from '../message-list/message-list.component'
import {MessageItemComponent} from '../message-item/message-item.component'
import {MessageFormComponent} from '../message-form/message-form.component'
import {Message} from '../data-model/message'

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  public message : Message;
  public messages : Message[];

//public thisDialogRef: MatDialogRef<FeedbackComponent>, @Inject(MAT_DIALOG_DATA) public data: string
  constructor() {
    
   }

  ngOnInit() {
    this.message = new Message('', '/assets/images/user.png');
    this.messages = [
      new Message('Welcome to chatbot universe', '/assets/images/bot.png', new Date())
    ];
  }

  // onCloseSubmit() {
  //   this.thisDialogRef.close('Confirm');

  // }

  

}
