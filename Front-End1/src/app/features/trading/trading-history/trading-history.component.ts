import { Component, OnInit } from '@angular/core';
import { TradingService } from 'src/app/core/services/trading.service';

@Component({
  selector: 'hd-trading-history',
  templateUrl: './trading-history.component.html',
  styleUrls: ['./trading-history.component.scss']
})
export class TradingHistoryComponent implements OnInit {
  files: any[];
  constructor(
    private tradingService: TradingService
  ) { }

  ngOnInit(): void {
  }

  onChangeFileUpload(event: any) {
    this.files = event.target.files;
    console.log(this.files);
  }

  onClickImport() {
    if (this.files.length > 0) {
      const formData = new FormData();
      formData.append('file', this.files[0]);
      this.tradingService.importHistory(formData).subscribe(
        data => {

        }
      )
    }
  }
}
