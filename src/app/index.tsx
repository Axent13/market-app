import { MainPage } from '../pages/MainPage/ui/MainPage';
import './index.scss';
import { ThemeProvider } from '../shared/theme/ThemeProvider';

import './icons/icon-192x192.png';
import './icons/icon-512x512.png';

const App = () => {
  return (
    <ThemeProvider>
      <MainPage />
    </ThemeProvider>
  );
};

export default App;
