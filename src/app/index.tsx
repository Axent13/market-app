import Page from '../pages/page';
import './index.scss';
import { ThemeProvider } from '../shared/theme/ThemeProvider';

const App = () => {
  return (
    <ThemeProvider>
      <Page />
    </ThemeProvider>
  );
};

export default App;
