import '@css/index.scss';
import type { AppProps } from 'next/app';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          <!-- Google tag (gtag.js) -->
          <script async src="https://www.googletagmanager.com/gtag/js?id='${process.env.NEXT_PUBLIC_GA}'"></script>
          <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', '${process.env.NEXT_PUBLIC_GA}', { 'anonymize_ip': true });
          </script>
        `}
      </Script>
      <Component {...pageProps} />
    </>
  )

}

export default MyApp
