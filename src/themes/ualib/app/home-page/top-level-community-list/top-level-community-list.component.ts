import { Component } from '@angular/core';
import { TopLevelCommunityListComponent as BaseComponent } from '../../../../../app/home-page/top-level-community-list/top-level-community-list.component';

@Component({
  selector: 'caryl-top-level-community-list',
  // styleUrls: ['./top-level-community-list.component.scss'],
  styleUrls: [
    '../../../../../app/home-page/top-level-community-list/top-level-community-list.component.scss',
  ],
  templateUrl: './top-level-community-list.component.html',
  // templateUrl:
  // '../../../../../app/home-page/top-level-community-list/top-level-community-list.component.html',
})

/**
 * Component to render the news section on the home page
 */
export class TopLevelCommunityListComponent extends BaseComponent {}
