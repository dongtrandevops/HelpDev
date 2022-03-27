import { Component, OnInit } from '@angular/core';
import { WebsiteDTO } from 'src/app/core/models/website.model';
import { WebsiteService } from 'src/app/core/services/website.service';
import { CdkDragDrop, CdkDragEnter, moveItemInArray } from '@angular/cdk/drag-drop';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ButtonType } from 'src/app/core/enums/ui.enum';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'hd-setting-website',
  templateUrl: './setting-website.component.html',
  styleUrls: ['./setting-website.component.scss']
})
export class SettingWebsiteComponent implements OnInit {
  websites: WebsiteDTO[] = [];
  isDisabledResetBtn: boolean = true;
  isSaving: boolean;
  buttonType = ButtonType;

  websiteFormGroup = new FormGroup({
    id: new FormControl(0),
    url: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    requestHeaderCookie: new FormControl(''),
    order: new FormControl(),
  })

  constructor(
    private websiteService: WebsiteService,
    private notificationService: NotificationService
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
    this.websites.forEach((c, index) => c.order = index);
    this.websiteService.updateRange(this.websites).subscribe()
  }

  setColorSelectedWebsite(index: number) {
    this.websites.forEach(c => c.isSelected = false);
    this.websites[index].isSelected = true;
  }

  onSubmit() {
    if (this.websiteFormGroup.valid) {
      this.isSaving = true;
      const model = { ...this.websiteFormGroup.value } as WebsiteDTO;

      if (model.id && model.id !== 0) {
        this.websiteService.update(model, model.id).subscribe(
          success => {
            this.isSaving = false;
            this.notificationService.showSuccesMessage();
            this.websites.forEach(c => {
              if (c.id === model.id) {
                debugger
                c.url = model.url;
                c.name = model.name;
                c.requestHeaderCookie = model.requestHeaderCookie;
              }
            })
          },
          error => {
            this.isSaving = false;
            this.notificationService.showErrorMessage()
          }
        );
      } else {
        this.websiteService.add(model).subscribe(
          success => {
            this.isSaving = false;
            this.notificationService.showSuccesMessage();
            this.websites.forEach(c => {
              if (c.id === model.id) {
                c.url = model.url;
                c.name = model.name;
                c.requestHeaderCookie = model.requestHeaderCookie;
              }
            })
          },
          error => {
            this.isSaving = false;
            this.notificationService.showErrorMessage()
          }
        );
      }
    }
  }

  onResetForm() {
    this.isDisabledResetBtn = true;
    this.websites.forEach(c => c.isSelected = false);
  }
}
