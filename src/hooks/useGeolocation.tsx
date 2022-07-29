import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

interface locationData {
  position?: {
    state: string;
    state_code: string;
  };
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
          setLocation({
            position: {
              state: location.results[0].components.state,
              state_code: location.results[0].components.state_code,
            },
          });
        },
        error => {
          setLocation({ error: error.message });
        }
      );
    } else {
      toast.error('O seu navegador não tem suporte a geolocalização');
    }
  }, []);

  return location;
};
