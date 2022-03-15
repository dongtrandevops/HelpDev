import { Component, OnInit } from '@angular/core';
import { WebsiteDTO } from 'src/app/core/models/website.model';
import { WebsiteService } from 'src/app/core/services/website.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'hd-setting-website',
  templateUrl: './setting-website.component.html',
  styleUrls: ['./setting-website.component.scss']
})
export class SettingWebsiteComponent implements OnInit {
  websites: WebsiteDTO[] = [];

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

  

  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi',
    'Episode IX – The Rise of Skywalker',
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }
}
