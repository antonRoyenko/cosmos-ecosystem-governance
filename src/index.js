import './assets/styles/index.css';
import { Provider } from 'react-redux';
// import Splash from '@citadeldao/apps-ui-kit/dist/components/uiKit/Splash';
import { createRoot } from 'react-dom/client';
import { store } from './store/store';
import { App } from './pages/App';
import { Config } from './config';

export const config = new Config();
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

// const splashContainer = document.getElementById('splash');
// const splashRoot = createRoot(splashContainer);
// splashRoot.render(<Splash config={config.splashParamsFromConfig()} />);

// const r = document.querySelector(':root');
// r.style.setProperty(
//     '--appThemeColor',
//     config.tabbarParamsFromConfig('BACKGROUND_COLOR'),
// );
