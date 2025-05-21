import { createRoot } from 'react-dom/client'
import './index.css'
import './global.css'
import App from './routes/main.routes';
import ContextWrapper from './contexts/Context';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-loading-skeleton/dist/skeleton.css';

createRoot(document.getElementById('root')).render(
  <ContextWrapper>
    <App />
    <ToastContainer />
  </ContextWrapper>,
)
