import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import useFanStore from '../../shared/store/fanStore';

interface FanProfileFormData {
  name: string;
  email: string;
  favoritePlayer: string;
  favoriteMoment: string;
}

const FanProfileForm: React.FC = () => {
  const { register, handleSubmit } = useForm<FanProfileFormData>();
  const setFanProfile = useFanStore(state => state.setFanProfile);

  const onSubmit = (data: FanProfileFormData) => {
    setFanProfile(data);
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-white mb-1">Adınız</label>
        <input
          id="name"
          {...register('name', { required: true })}
          className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder:text-gray-400"
          placeholder="Adınızı girin"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-white mb-1">E-posta</label>
        <input
          id="email"
          type="email"
          {...register('email', { required: true })}          
          className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder:text-gray-400"
          placeholder="E-posta adresinizi girin"
        />
      </div>

      <div>
        <label htmlFor="favoritePlayer" className="block text-sm font-medium text-white mb-1">Favori Oyuncu</label>
        <input
          id="favoritePlayer"
          {...register('favoritePlayer', { required: true })}          
          className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder:text-gray-400"
          placeholder="Favori oyuncunuzun adını girin"
        />
      </div>

      <div>
        <label htmlFor="favoriteMoment" className="block text-sm font-medium text-white mb-1">Favori An</label>
        <textarea
          id="favoriteMoment"
          {...register('favoriteMoment', { required: true })}          
          className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder:text-gray-400"
          placeholder="Favori anınızı anlatın"
          rows={4}
        />
      </div>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
      >
        Profili Kaydet
      </motion.button>
    </motion.form>
  );
};

export default FanProfileForm;