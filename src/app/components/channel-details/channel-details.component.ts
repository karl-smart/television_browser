import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Broadcast } from 'src/app/models/broadcast';
import { GetProgrammeService } from 'src/app/services/get.programme.service';

@Component({
  selector: 'app-channel-details',
  templateUrl: './channel-details.component.html',
  styleUrls: ['./channel-details.component.scss'],
})
export class ChannelDetailsComponent {
  programme!: any;

  constructor(
    private getProgramme: GetProgrammeService,
    private route: ActivatedRoute
  ) {
    this.fetchProgramme();
  }

  fetchProgramme() {
    const channelId: string = this.getChannelIdFromRoute();

    this.getProgramme.getProgrammeByChannelId(channelId).subscribe((res) => {
      this.programme = res;
    });
  }

  getChannelIdFromRoute(): string {
    let channelIdFromParams: string;

    this.route.paramMap.subscribe((params) => {
      const paramId = params.get('id');

      if (!paramId) {
        const errorMessage = 'no channel id found in url';
        throw new Error(errorMessage);
      }

      channelIdFromParams = paramId!;
    });

    return channelIdFromParams!;
  }

  isBroadCastLongerThan60Minutes(program: Broadcast): boolean {
    const start = new Date(program.startDate).getTime();
    const end = new Date(program.endDate).getTime();

    const milliseconds = Math.abs(end - start);
    const hours = milliseconds / 3600000;

    return hours > 1;
  }
}
