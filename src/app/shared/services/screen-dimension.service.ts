import { Injectable, NgZone, HostListener } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ScreenDimensionService {
  @HostListener('window:resize',['$event'])

  protected screenWidth: number = window.innerWidth;
  public skills: any;
  public readonly bootstrapSmPoint = 768;
  public readonly bootstrapMdPoint = 1024;
  public readonly bootstrapLgPoint = 1440;
  public readonly bootstrapXlPoint = 1920;

  public breakpoint = 'xs';

  constructor(ngZone: NgZone) {
    this.init(window.innerWidth);
    window.onresize = () => {
      ngZone.run(() => {
        this.init(window.innerWidth)
      })
    }
  }
  /**
   * init
   */
  public init(width: number) {
    this.screenWidth = width;
    this.setBreakPoint(width);
  }
  setBreakPoint(width: number): void {
    switch (true) {
      case width >= this.bootstrapXlPoint:
        this.breakpoint = 'xl'
        break;
      case width >= this.bootstrapLgPoint:
        this.breakpoint = 'lg'
        break;
      case width >= this.bootstrapSmPoint:
        this.breakpoint = 'sm'
        break;
      case width >= this.bootstrapSmPoint:
        this.breakpoint = 'xs'
        break;
    }
  }

  public upXl(): boolean {
    return this.screenWidth >= this.bootstrapXlPoint;
  }
  public upLg(): boolean {
    return this.screenWidth >= this.bootstrapLgPoint;
  }
  public downLg(): boolean {
    return this.screenWidth < this.bootstrapLgPoint;
  }
  public upMd(): boolean {
    return this.screenWidth >= this.bootstrapMdPoint;
  }
  public downMd(): boolean {
    return this.screenWidth < this.bootstrapMdPoint;
  }
  public upSm(): boolean {
    return this.screenWidth >= this.bootstrapSmPoint;
  }
  public downSm(): boolean {
    return this.screenWidth < this.bootstrapSmPoint;
  }

}