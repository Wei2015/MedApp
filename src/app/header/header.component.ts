import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FeedbackComponent } from '../feedback/feedback.component';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  dialogResult = "";

  constructor(public dialog : MatDialog) { }

  ngOnInit() {
  }

  openFeedbackForm() {
    let dialogRef = this.dialog.open(FeedbackComponent, {
      width: '600px',
      data: 'This is passed into the dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
      this.dialogResult = result;
    })

  }

}
