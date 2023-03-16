import { Component, OnInit } from '@angular/core';
import { Quote } from '../../model/quote';
import { QuoteService } from '../../services/quote/quote-service.service';
 
@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.scss']
})
export class QuoteListComponent implements OnInit {

  quotes?: Quote[];

  constructor(private quoteService: QuoteService) {
  }

  async ngOnInit() {
      this.quoteService.findAll().subscribe(data => {
      this.quotes = data;
    });
  }

}
