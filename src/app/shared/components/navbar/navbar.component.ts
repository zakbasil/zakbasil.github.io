import { Component } from '@angular/core';
import { ReadBasicInfoService } from '../../services/read-basic-info.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  /**
   *
   */
  constructor(
    private readonly readInfo: ReadBasicInfoService
  ) {

  }

  public readonly navList = [
    { "name": "Home", "url": "/home" },
    { "name": "Experience", "url": "/experience" },
    { "name": "Blogs", "url": "blogs" }
  ];

  public readonly contactList: any[] = this.readInfo.getContactInfo();

}
