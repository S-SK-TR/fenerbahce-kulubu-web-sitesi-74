import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import useFanStore from '../../shared/store/fanStore';

const fanProfileSchema = z.object({
  name: z.string().min(2, 'İsim en az 2 karakter olmalı'),
  favoritePlayer: z.string().min(2, 'Favori oyuncu en az 2 karakter olmalı'),
  membershipDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Geçerli bir tarih girin (YYYY-AA-GG)'),
  notificationsEnabled: z.boolean()
});

type FanProfileFormData = z.infer<typeof fanProfileSchema>;

const FanProfileForm: React.FC = () => {
  const { fanProfile, updateFanProfile } = useFanStore();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FanProfileFormData>({
    resolver: zodResolver(fanProfileSchema),
    defaultValues: fanProfile || {
      name: '',
      favoritePlayer: '',
      membershipDate: new Date().toISOString().split('T')[0],
      notificationsEnabled: true
    }
  });

  const onSubmit = (data: FanProfileFormData) => {
    updateFanProfile(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">İsim</label>
        <input
          id="name"
          {...register('name')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="favoritePlayer" className="block text-sm font-medium text-gray-700">Favori Oyuncu</label>
        <input
          id="favoritePlayer"
          {...register('favoritePlayer')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
        {errors.favoritePlayer && <p className="mt-1 text-sm text-red-600">{errors.favoritePlayer.message}</p>}
      </div>

      <div>
        <label htmlFor="membershipDate" className="block text-sm font-medium text-gray-700">Üyelik Tarihi</label>
        <input
          id="membershipDate"
          type="date"
          {...register('membershipDate')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
        {errors.membershipDate && <p className="mt-1 text-sm text-red-600">{errors.membershipDate.message}</p>}
      </div>

      <div className="flex items-center">
        <input
          id="notificationsEnabled"
          type="checkbox"
          {...register('notificationsEnabled')}
          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
        />
        <label htmlFor="notificationsEnabled" className="ml-2 block text-sm text-gray-900">Bildirimleri Etkinleştir</label>
      </div>

      <button
        type="submit"
        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Kaydet
      </button>
    </form>
  );
};

export default FanProfileForm;
