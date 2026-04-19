import { Rubik, Monoton } from 'next/font/google'

const rubik = Rubik({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-rubik',
  display: 'swap',
})

const monoton = Monoton({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-monoton',
  display: 'swap',
})

import "@styles/css/plugins/bootstrap.min.css";
import "@styles/css/plugins/swiper.min.css";
import "@styles/css/plugins/font-awesome.min.css";

import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

import '@styles/scss/style.scss';
import "./globals.css";

import ScrollbarProgress from "@layouts/scrollbar-progress/Index";
import CookieBanner from "@components/CookieBanner";
import { LanguageProvider } from "@common/LanguageContext";

import AppData from "@data/app.json";

export const metadata = {
  title: {
		default: AppData.settings.siteName,
		template: "%s | " + AppData.settings.siteName,
	},
  description: AppData.settings.siteDescription,
}

const Layouts = ({
  children
}) => {
  return (
    <html lang="en" className={`${rubik.variable} ${monoton.variable}`}>
      <head>
        <link rel="preload" href="/img/hero/banner-bg-compressed.mp4" as="video" type="video/mp4" />
      </head>
      <body>
        {/* app wrapper */}
        <LanguageProvider>
          <div className="sb-app">
            {children}

            <ScrollbarProgress />
            <CookieBanner />
          </div>
        </LanguageProvider>
        {/* app wrapper end */}
      </body>
    </html>
  );
};
export default Layouts;
