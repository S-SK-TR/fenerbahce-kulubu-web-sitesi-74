import React from 'react';
import { motion } from 'framer-motion';
import useFanStore from '../../shared/store/fanStore';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

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
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-white">Taraftar Profili</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
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
        </CardContent>
      </Card>

      <Button
        variant="destructive"
        onClick={clearFanProfile}
        className="w-full"
      >
        Profili Sil
      </Button>
    </motion.div>
  );
};

export default FanProfileDisplay;