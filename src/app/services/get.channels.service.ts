import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChannelsList } from '../models/channels-list';

@Injectable({
  providedIn: 'root',
})
export class GetChannelsService {
  constructor(private http: HttpClient) {}

  all(): Observable<ChannelsList> {
    return this.http.get<ChannelsList>(
      'https://production-cdn.dr-massive.com/api/channels/195869?channel_group=all&device=web_browser&ff=idp%2Cldp%2Crpt&geoLocation=dk&isDeviceAbroad=false&lang=da&page=1&segments=drtv%2Coptedin&sub=Anonymous'
    );
  }
}
