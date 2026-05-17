import React from 'react';
import useFanStore from '../../shared/store/fanStore';

const FanProfileDisplay: React.FC = () => {
  const { fanProfile, toggleNotifications, resetFanProfile } = useFanStore();

  if (!fanProfile) {
    return <div className="text-center py-8">Profil bilgisi bulunamadı.</div>;
  }

  return (
    <div className="space-y-4">
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Taraftar Profili</h3>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">İsim</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{fanProfile.name}</dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Favori Oyuncu</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{fanProfile.favoritePlayer}</dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Üyelik Tarihi</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{fanProfile.membershipDate}</dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Bildirimler</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {fanProfile.notificationsEnabled ? 'Etkin' : 'Devre Dışı'}
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="flex space-x-4">
        <button
          onClick={toggleNotifications}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Bildirimleri {fanProfile.notificationsEnabled ? 'Devre Dışı Bırak' : 'Etkinleştir'}
        </button>
        <button
          onClick={resetFanProfile}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Profili Sıfırla
        </button>
      </div>
    </div>
  );
};

export default FanProfileDisplay;
