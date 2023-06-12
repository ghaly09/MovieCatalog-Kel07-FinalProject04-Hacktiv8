import { Layout } from "@/components/Templates/Layout/Layout";
import "@/styles/globals.css";
import Head from "next/head";
import { wrapper } from "@/redux/store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { QueryClient, QueryClientProvider } from "react-query";

export default function App({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const persistore = persistStore(store);
  const queryClient = new QueryClient();
  return (
    <>
      <Head>
        <title>MovieCat</title>
        <meta
          name="description"
          content="Final Project Hacktiv8 | Moviecat | NextJS"
        ></meta>
      </Head>
      <Provider store={store}>
        <PersistGate persistor={persistore}>
          <QueryClientProvider client={queryClient}>
            <Layout>
              <Component {...props.pageProps} />
            </Layout>
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </>
  );
}
