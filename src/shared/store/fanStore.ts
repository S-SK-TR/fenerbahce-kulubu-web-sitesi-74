import { create } from 'zustand';
import { FanStoreState, FanProfile } from '../types/fanStore';

const useFanStore = create<FanStoreState>((set) => ({
  fanProfile: null,

  updateFanProfile: (profile: FanProfile) => set({ fanProfile: profile }),
  toggleNotifications: () => set((state) => ({
    fanProfile: state.fanProfile ? {
      ...state.fanProfile,
      notificationsEnabled: !state.fanProfile.notificationsEnabled
    } : null
  })),
  resetFanProfile: () => set({ fanProfile: null })
}));

export default useFanStore;
