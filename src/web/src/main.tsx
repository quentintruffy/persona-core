// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

const RootComponent = () => {
  const [visible, setVisible] = useState(false);

  const handleNuiCallback = (event: any) => {
    console.log(event.data.action);
    switch (event.data.action) {
      case 'OPEN': {
        setVisible(true);
        break;
      }
    }
  };

  window.addEventListener('message', handleNuiCallback);
  return <React.StrictMode>{visible ? <App /> : <></>}</React.StrictMode>;
};

ReactDOM.createRoot(document.getElementById('root')!).render(<RootComponent />);
