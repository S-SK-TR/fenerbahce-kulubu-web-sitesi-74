import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface FanProfile {
  name: string;
  email: string;
  favoritePlayer: string;
  favoriteMoment: string;
}

interface FanStore {
  fanProfile: FanProfile | null;
  setFanProfile: (profile: FanProfile) => void;
  clearFanProfile: () => void;
}

const useFanStore = create<FanStore>()(
  persist(
    (set) => ({
      fanProfile: null,
      setFanProfile: (profile) => set({ fanProfile: profile }),
      clearFanProfile: () => set({ fanProfile: null }),
    }),
    {
      name: 'fan-profile-storage',
    }
  )
);

export default useFanStore;