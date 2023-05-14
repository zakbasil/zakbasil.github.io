import { Component } from '@angular/core';
import { ReadBasicInfoService } from '../../services/read-basic-info.service';
import { Router } from '@angular/router';
import { ScreenDimensionService } from '../../services/screen-dimension.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  activeLinkIndex = -1;
  

  /**
   *
   */
  constructor(
    private readonly readInfo: ReadBasicInfoService,
    private router: Router,
    private screenDimensionService:ScreenDimensionService
  ) {

  }

  public isMobile = () => this.screenDimensionService.downSm()
  public isDesktop = () => this.screenDimensionService.upLg()

  public readonly navlinks:any[] = [
    { label: "Home", link: "/home", index: 0 },
    // { label: "Experience", link: "/experience", index: 1 },
    // { label: "Blogs", link: "/blogs", index: 2 }
  ];

  public readonly contactList: any[] = this.readInfo.getContactInfo();
  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.activeLinkIndex = this.navlinks.indexOf(this.navlinks.find(tab => tab.link === '.' + this.router.url));
    });
  }
}
