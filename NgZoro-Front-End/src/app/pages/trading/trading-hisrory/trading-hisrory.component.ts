import { Component } from '@angular/core';
import { NzUploadFile, NzUploadModule } from 'ng-zorro-antd/upload';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-trading-hisrory',
  imports: [
    SharedModule,
    NzUploadModule
  ],
  templateUrl: './trading-hisrory.component.html',
  styleUrl: './trading-hisrory.component.scss'
})
export class TradingHisroryComponent {
  uploading = false;
  fileList: [] = [];
  
  constructor() { }

  
  beforeUpload = (file: NzUploadFile): boolean => {
    this.fileList = this.fileList.concat(file);
    return false;
  };

  onChangeUpload(event: any) {

  }
}
