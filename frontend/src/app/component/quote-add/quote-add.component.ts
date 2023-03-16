import {Component, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Quote } from 'src/app/model/quote';
import { QuoteService } from 'src/app/services/quote/quote-service.service';
 
export interface DialogData {
  message: string;
  author: string;
}

@Component({
  selector: 'app-quote-add',
  templateUrl: './quote-add.component.html',
  styleUrls: ['./quote-add.component.scss']
})

export class QuoteAddComponent {

  constructor(
    public dialogRef: MatDialogRef<QuoteAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private quoteService: QuoteService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
