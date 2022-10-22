import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {ToastMessage} from '../global/message';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <ToastMessage />
    </>
  );
}

export default MyApp
