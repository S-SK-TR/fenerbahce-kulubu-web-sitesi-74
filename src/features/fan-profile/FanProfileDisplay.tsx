import React from 'react';
import { motion } from 'framer-motion';
import useFanStore from '../../shared/store/fanStore';

const FanProfileDisplay: React.FC = () => {
  const { fanProfile, clearFanProfile } = useFanStore();

  if (!fanProfile) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
        <h2 className="text-2xl font-semibold text-white mb-4">Taraftar Profili</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium text-gray-400">Ad</h3>
            <p className="text-lg text-white">{fanProfile.name}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-400">E-posta</h3>
            <p className="text-lg text-white">{fanProfile.email}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-400">Favori Oyuncu</h3>
            <p className="text-lg text-white">{fanProfile.favoritePlayer}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-400">Favori An</h3>
            <p className="text-lg text-white whitespace-pre-line">{fanProfile.favoriteMoment}</p>
          </div>
        </div>
      </div>

      <motion.button
        onClick={clearFanProfile}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-3 px-4 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-200"
      >
        Profili Sil
      </motion.button>
    </motion.div>
  );
};

export default FanProfileDisplay;