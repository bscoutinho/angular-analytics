import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { GoogleTagManagerService } from './analytics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'analytics';
  constructor(private router: Router, private gtmService: GoogleTagManagerService) {
    /* const navEndEvents = router.events.pipe(
      filter(event => event instanceof NavigationEnd )
    );

    navEndEvents.subscribe((event: NavigationEnd) => {
      
    }) */
  }

  customEvent() {
    // push GTM data layer with a custom event
    const gtmTag = {
      event: 'button-click',
      data: 'my-custom-event',
    };
    this.gtmService.pushTagUId(gtmTag);

    
    alert('this is a custom event');
  }

  ngOnInit() {
    // push GTM for every visited page
    this.router.events.forEach(item => {
      if (item instanceof NavigationEnd) {
        const gtmTag = {
          event: 'page',
          pageName: item.url
        };

        this.gtmService.addGtmToDom();
      }
    });
  }
}
