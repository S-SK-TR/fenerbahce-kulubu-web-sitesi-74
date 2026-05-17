import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import useFanStore from '../../shared/store/fanStore';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface FanProfileFormData {
  name: string;
  email: string;
  favoritePlayer: string;
  favoriteMoment: string;
}

const FanProfileForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FanProfileFormData>();
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
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-white">Taraftar Profili Oluştur</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-white">Adınız</Label>
            <Input
              id="name"
              {...register('name', { required: 'Ad alanı zorunludur' })}              
              placeholder="Adınızı girin"
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">E-posta</Label>
            <Input
              id="email"
              type="email"
              {...register('email', { required: 'E-posta alanı zorunludur' })}              
              placeholder="E-posta adresinizi girin"
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="favoritePlayer" className="text-white">Favori Oyuncu</Label>
            <Input
              id="favoritePlayer"
              {...register('favoritePlayer', { required: 'Favori oyuncu alanı zorunludur' })}              
              placeholder="Favori oyuncunuzun adını girin"
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
            />
            {errors.favoritePlayer && <p className="text-red-500 text-sm mt-1">{errors.favoritePlayer.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="favoriteMoment" className="text-white">Favori An</Label>
            <Textarea
              id="favoriteMoment"
              {...register('favoriteMoment', { required: 'Favori an alanı zorunludur' })}              
              placeholder="Favori anınızı anlatın"
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
              rows={4}
            />
            {errors.favoriteMoment && <p className="text-red-500 text-sm mt-1">{errors.favoriteMoment.message}</p>}
          </div>
        </CardContent>
      </Card>

      <Button type="submit" className="w-full">
        Profili Kaydet
      </Button>
    </motion.form>
  );
};

export default FanProfileForm;