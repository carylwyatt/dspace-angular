import { Component, Injectable, Input } from '@angular/core';
import { UIURLCombiner } from '../../core/url-combiner/ui-url-combiner';

/**
 * This component builds a URL from the value of "handle"
 */

@Component({
  selector: 'ds-comcol-page-handle',
  styleUrls: ['./comcol-page-handle.component.scss'],
  templateUrl: './comcol-page-handle.component.html'
})

@Injectable()
export class ComcolPageHandleComponent {

  // Optional title
  @Input() title: string;

  // The value of "handle"
  @Input() content: string;

  public getHandle(): string {
    return new UIURLCombiner('/handle/', this.content).toString();
  }
}
