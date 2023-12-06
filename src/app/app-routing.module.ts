import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChannelDetailsComponent } from './components/channel-details/channel-details.component';
import { ChannelListComponent } from './components/channel-list/channel-list.component';

const routes: Routes = [
  { path: '', component: ChannelListComponent },
  {
    path: 'channel/:id',
    component: ChannelDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
