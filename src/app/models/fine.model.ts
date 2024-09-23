export interface Fine {
    id: number;
    createdDate: string;
    createdBy: string;
    lastUpdatedAt: string;
    lastUpdatedBy: string;
    description: string;
    price: number;
    moderationState: string;
    // sanctionType: any;  // Aquí puedes definir un modelo para `SanctionType` si es necesario
  }
  