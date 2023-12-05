import { Component } from '@angular/core';
import { GetChannelsService } from 'src/app/services/get.channels.service';

@Component({
  selector: 'app-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.scss'],
})
export class ChannelListComponent {
  constructor(private getChannels: GetChannelsService) {
    getChannels.all().subscribe((res) => {
      this.channels = res.items;
    });
  }

  channels: any;
}
