import { Component } from '@angular/core';
import { Channel } from 'src/app/models/channel';
import { ChannelsDTO } from 'src/app/models/channels-dto';
import { GetChannelsService } from 'src/app/services/get.channels.service';

@Component({
  selector: 'app-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.scss'],
})
export class ChannelListComponent {
  constructor(private getChannels: GetChannelsService) {
    getChannels.all().subscribe((res: ChannelsDTO) => {
      this.channels = res.items;
    });
  }

  channels!: Channel[];
}
