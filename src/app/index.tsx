import { MainPage } from '../pages/MainPage/ui/MainPage';
import './index.scss';
import { ThemeProvider } from '../shared/theme/ThemeProvider';

const App = () => {
  return (
    <ThemeProvider>
      <MainPage />
    </ThemeProvider>
  );
};

export default App;
