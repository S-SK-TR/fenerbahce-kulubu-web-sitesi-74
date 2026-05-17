import React from 'react';
import FanProfileForm from './features/fan-profile/FanProfileForm';
import FanProfileDisplay from './features/fan-profile/FanProfileDisplay';
import useFanStore from './shared/store/fanStore';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

function App() {
  const { fanProfile } = useFanStore();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/5 backdrop-blur-lg rounded-3xl shadow-xl border border-white/10 p-8">
          <h1 className="text-3xl font-bold text-white mb-8 text-center">Taraftar Profili</h1>
          {fanProfile ? <FanProfileDisplay /> : <FanProfileForm />}
        </motion.div>
      </div>
    </div>
  );
}

export default App;