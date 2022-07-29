import { useEffect, useState } from 'react';

interface locationData {
  position: string;
  error?: string;
}

export const useGeolocation = () => {
  const [location, setLocation] = useState({} as locationData);

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        async position => {
          const { latitude, longitude } = position.coords;
          const location = await fetch(
            `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=35f709f4ef1e401c8ad997c809b4a6a3`
          ).then(res => res.json());
          setLocation({ position: location.results[0].formatted });
        },
        error => {
          setLocation({ position: '', error: error.message });
        }
      );
    } else {
      alert('O seu navegador não suporta geolocation.');
    }
  }, []);

  return location;
};
