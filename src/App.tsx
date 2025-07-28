import React from 'react';
import Home from './pages/Home';
import MyStable from './pages/MyStable';

/**
 * Simple router based on pathname. When visiting `/mystable` the
 * MyStable dashboard is rendered, otherwise the landing page.
 */
export default function App() {
  const path = window.location.pathname.toLowerCase();
  if (path.includes('mystable')) {
    return <MyStable />;
  }
  return <Home />;
}
