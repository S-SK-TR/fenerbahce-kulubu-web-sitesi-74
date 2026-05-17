import React from 'react';
import { FanProfileForm, FanProfileDisplay } from './features/fan-profile';
import useFanStore from './shared/store/fanStore';

function App() {
  const { fanProfile } = useFanStore();

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Taraftar Profili</h1>
        {fanProfile ? <FanProfileDisplay /> : <FanProfileForm />}
      </div>
    </div>
  );
}

export default App;
