import React, { useState } from 'react';
import axios from 'axios';

const Time = () => {
  const [time, setTime] = useState("");

  const fetchTime = async () => {
    try {
      const response = await axios.get('https://timeapi.io/api/Time/current/zone?timeZone=Asia%2FJakarta');
      const currentTime = `${response.data.date} ${response.data.time}`;
      setTime(currentTime);
    } catch (error) {
      console.error('Error fetching time:', error);
      setTime('Gagal mengambil waktu. Coba lagi.');
    }
  };

  return (
    <div className="flex flex-col gap-3 w-64">
      <div className={`flex flex-col gap-3 ${time ? '' : 'invisible'}`}>
        <h2>Waktu saat ini:</h2>
        <div className="bg-white border rounded text-center text-2xl font-bold p-3">{time || '-'}</div>
      </div>
      <button onClick={fetchTime} className="w-full bg-blue-400 border rounded text-white text-2xl font-bold p-3">Cek Waktu</button>
    </div>
  );
};

export default Time;