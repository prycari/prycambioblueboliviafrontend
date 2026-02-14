import CssBaseline from '@mui/material/CssBaseline';

import { AppTheme } from './theme/AppTheme';
import { Footer } from './components/Footer';
import { AppAppBar } from './components/AppAppBar';

import { Calculator } from './components/calculator/Calculator';
import { StoreProvider } from './components/StoreProvider';
import { Route, Routes } from 'react-router-dom';
import { Map } from './components/map/Map';

export default function App(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <StoreProvider>
        <CssBaseline enableColorScheme />
        <AppAppBar />

        <Routes>
          <Route path="/" element={<Calculator />} />
          <Route path="/sucursales" element={<Map />} />
        </Routes>

        <Footer />
      </StoreProvider>
    </AppTheme>
  );
}
