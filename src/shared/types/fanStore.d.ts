export interface FanProfile {
  name: string;
  email: string;
  favoritePlayer: string;
  favoriteMoment: string;
}

export interface FanStoreState {
  fanProfile: FanProfile | null;
}