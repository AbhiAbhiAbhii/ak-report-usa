import '../styles/globals.css';
import { wrapper, store } from "../redux/store";
import { Provider } from "react-redux";
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
        <Analytics />
      </Provider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
