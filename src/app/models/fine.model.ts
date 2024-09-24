import { Infraction } from './infraction.model';

export interface Fine {
  id: number;
  createdDate: string;
  createdBy: string;
  lastUpdatedAt: string;
  lastUpdatedBy: string;
  description: string;
  price: number;
  moderationState: string;
  sanctionType: string;
  infractions: Infraction[];
}
