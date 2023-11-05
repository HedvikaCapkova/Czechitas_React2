import React, { useEffect, useState } from 'react';

const Offline = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const handleOfflie = () => {
    setIsOnline(false);
    console.log('offline');
  };

  const handleOnline = () => {
    setIsOnline(true);
  };

  useEffect(() => {
    console.log('mounted');
    window.addEventListener('offline', handleOfflie);
    window.addEventListener('online', handleOnline);

    return () => {
      console.log('unmount');
      window.removeEventListener('offline', handleOfflie);
      window.removeEventListener('online', handleOnline);
    };
  }, []);

  if (isOnline) {
    return <p>Všechno v pořádku</p>;
  }

  return <p>Jste offline!</p>;
};

export default Offline;
