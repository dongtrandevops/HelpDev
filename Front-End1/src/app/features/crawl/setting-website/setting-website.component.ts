import { Component, OnInit } from '@angular/core';
import { WebsiteDTO } from 'src/app/core/models/website.model';
import { WebsiteService } from 'src/app/core/services/website.service';
import { CdkDragDrop, CdkDragEnter, moveItemInArray } from '@angular/cdk/drag-drop';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'hd-setting-website',
  templateUrl: './setting-website.component.html',
  styleUrls: ['./setting-website.component.scss']
})
export class SettingWebsiteComponent implements OnInit {
  websites: WebsiteDTO[] = [];
  isDisabledResetBtn: boolean = true;

  websiteFormGroup = new FormGroup({
    url: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    requestHeaderCookie: new FormControl(''),
  })

  constructor(
    private websiteService: WebsiteService
  ) { }

  ngOnInit(): void {
    this.websiteService.getAll().subscribe(
      data => {
        this.websites = data;
      }
    )
  }

  onClickWebsite(website: WebsiteDTO, index: number) {
    this.websiteFormGroup.patchValue({ ...website });
    this.setColorSelectedWebsite(index);
    this.isDisabledResetBtn = false;
  }

  onDroped(event: CdkDragDrop<WebsiteDTO[]>) {
    moveItemInArray(this.websites, event.previousIndex, event.currentIndex);
    // this.websiteFormGroup.patchValue({ ... this.websites[event.currentIndex] });
    // this.setColorSelectedWebsite(event.currentIndex);
  }

  setColorSelectedWebsite(index: number) {
    this.websites.forEach(c => c.isSelected = false);
    this.websites[index].isSelected = true;
  }

  onResetForm() {
    this.websiteFormGroup.reset();
    this.isDisabledResetBtn = true;
    this.websites.forEach(c => c.isSelected = false);
  }
}
