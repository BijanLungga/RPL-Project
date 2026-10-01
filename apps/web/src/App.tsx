import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-6 text-center">
      <div className="max-w-2xl bg-white p-8 rounded-xl shadow-md border border-gray-100">
        <h1 className="text-3xl font-bold text-indigo-600 mb-4">SkillSwap</h1>
        <p className="text-gray-600 text-lg mb-6">
          Platform Pertukaran Keahlian Antar-Pengguna (Peer-to-Peer) Berdasarkan Minat dan Kebutuhan Spesifik.
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-5 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium transition">
            Eksplorasi Partner
          </button>
          <button className="px-5 py-2.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 font-medium transition">
            Kelola Profil Keahlian
          </button>
        </div>
      </div>
    </div>
  );
}
