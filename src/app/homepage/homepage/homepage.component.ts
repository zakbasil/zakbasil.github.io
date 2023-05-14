import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Tiles } from 'src/app/shared/components/tiles/tiles.component';
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

  public readonly HomepageTiles:Tiles[] =[
    {Text:this.name,colspan:5,rowspan:1,color:'#212b38',font:'Montserrat-Regular',class:'name'},
    {Text:this.tagline,colspan:4,rowspan:3,color:'#e17a47',font:'Montserrat-Regular'},
    {Text:"Ride",colspan:1,rowspan:1,color:'#726eff',font:'Montserrat-Regular'},
    {Text:"Code",colspan:1,rowspan:1,color:'#08c6ab',font:'Montserrat-Regular'},
    {Text:"Teach",colspan:1,rowspan:1,color:'#325d79',font:'Montserrat-Regular'},
    {Text:this.summary,colspan:5,rowspan:2,color:'#212b38',font:'Montserrat-Regular',class:'summary'},
  ]

}
