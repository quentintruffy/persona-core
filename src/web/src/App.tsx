import { useEffect, useState } from 'react';
import './App.css';
import PhoneI, { Phone } from './Phone';

function App() {

  const [visible, setVisible] = useState(false);
  const [phoneVisible, setPhoneVisible] = useState(false);

  // const handleNuiCallback = (event: any) => {
  //   console.log(event.data.action);
  //   switch (event.data.action) {
  //     case 'OPEN': {
  //       setVisible(true);
  //       break;
  //     }
  //     case 'phone:open': {
  //       setPhoneVisible(true);
  //       break;
  //     }
  //     case 'phone:close': {
  //       setPhoneVisible(false);
  //       break;
  //     }
  //   }
  // };

  // window.addEventListener('message', handleNuiCallback);

  useEffect(() => {
    const handleNuiCallback = (event) => {
      console.log(event.data.action);
      switch (event.data.action) {
        case 'OPEN': {
          setVisible(true);
          break;
        }
        case 'phone:open': {
          setPhoneVisible(true);
          break;
        }
        case 'phone:close': {
          setPhoneVisible(false);
          break;
        }
      }
    };

    // Ajouter l'écouteur d'événement
    window.addEventListener('message', handleNuiCallback);

    // Nettoyer l'écouteur lors du démontage du composant
    return () => {
      window.removeEventListener('message', handleNuiCallback);
    };
  }, []); // Le tableau vide signifie que cet effet s'exécute une seule fois au montage


  // if (phoneVisible) return <PhoneI />;
  if (phoneVisible) return <Phone />;

  if (!visible) return <></>;

  return <></>;
}

export default App;
