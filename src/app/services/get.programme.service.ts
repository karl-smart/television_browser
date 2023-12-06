import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetProgrammeService {
  getProgrammeByChannelId(channelId: string): Observable<any> {
    const iso_date: string = new Date().toISOString().split('T')[0];
    const path = `https://production-cdn.dr-massive.com/api/schedules?channels=${channelId}&date=${iso_date}&device=web_browser&duration=24&ff=idp%2Cldp%2Crpt&geoLocation=dk&hour=0&isDeviceAbroad=false&lang=da&segments=drtv%2Coptedin&sub=Anonymous`;

    return this.httpClient.get(path);
  }

  constructor(private httpClient: HttpClient) {}
}
