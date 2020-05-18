import React from 'react';

import '../styles/tailwind.css';
const App: React.FC<{ Component: React.FC; pageProps: object }> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
