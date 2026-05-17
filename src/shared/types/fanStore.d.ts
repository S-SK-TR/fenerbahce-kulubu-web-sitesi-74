export interface FanProfile {
  name: string;
  favoritePlayer: string;
  membershipDate: string;
  notificationsEnabled: boolean;
}

export interface FanStoreState {
  fanProfile: FanProfile | null;
}
