import { Injectable } from '@angular/core';
import { IStepOption, TourService } from 'ngx-ui-tour-md-menu';

@Injectable()
export class GuideTourService {
  constructor(private tourService: TourService) {}

  basicTour() {
    const tourSteps: IStepOption[] = [
      {
        anchorId: 'start-anchor',
        title: 'Start',
        content: 'Start from here',
      },
      {
        anchorId: 'cow-anchor',
        title: 'Cow',
        content: 'Cow',
      },
      {
        anchorId: 'text-anchor',
        title: 'Text',
        content: 'Text',
      },

      {
        anchorId: 'donkey-anchor',
        title: 'Donkey',
        content: 'Donkey',
      },
    ];

    this.tourService.initialize(tourSteps, {
      enableBackdrop: true,
      centerAnchorOnScroll: true,
      smoothScroll: true,
      closeOnOutsideClick: true,
    });

    this.tourService.start();
  }
}
