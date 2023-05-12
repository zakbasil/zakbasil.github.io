import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ReadBasicInfoService } from 'src/app/shared/services/read-basic-info.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent {

  constructor(
    private readonly readInfo: ReadBasicInfoService,
    private readonly titleService:Title
  ) {
this.titleService.setTitle('Homepage')
  }

  public readonly name = this.readInfo.getName();
  public readonly firstName = this.name.split(' ')[0];
  public readonly lastName = this.name.split(' ')[1];

  public readonly location = this.readInfo.getLocation();
  public readonly summary = this.readInfo.getSummary();
  public readonly languages = this.readInfo.getLanguages();
  public readonly email = this.readInfo.getEmail();
  public readonly tagline = this.readInfo.getTagline();

}
