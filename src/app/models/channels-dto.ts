import { Channel } from './channel';

export interface ChannelsDTO {
  id: string;
  customFields: {
    PathIdSegment: string;
  };
  itemTypes: string[];
  description?: string;
  title: string;
  shortDescription?: string;
  tagline?: string;
  themes: any[];
  path: string;
  items: Channel[];
  size?: number;
  paging?: any;
}
