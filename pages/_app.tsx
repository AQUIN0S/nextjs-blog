import '../styles/global.css';

interface AppParams {
    Component: any;
    pageProps: object;
}

export default function App({ Component, pageProps }: AppParams) {
    return <Component {...pageProps} />
}