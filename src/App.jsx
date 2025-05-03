import './App.css'
import {Routes, useLocation, Route} from "react-router";
import {useSelector} from "react-redux";
import {selectUI} from "./redux/features/ui/ui-slice.js";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {lazy, Suspense} from "react";
import {AnimatePresence} from "motion/react";
import Splash from "./components/shared/splash.jsx";
import {THEMES} from "./utils/theme.js";
import PageTransitionWrapper from "./components/shared/page-transition.jsx";

const HomePage = lazy(() => import('./pages/home/home-page.jsx'));
const PrivacyPage = lazy(() => import('./pages/others/privacy-page.jsx'));
const TermsPage = lazy(() => import('./pages/others/terms-page.jsx'));

const AboutPage = lazy(() => import('./pages/about/about-page.jsx'));
const ContactPage = lazy(() => import('./pages/contact/contact-page.jsx'));
const ServicesPage = lazy(() => import('./pages/services/services-page.jsx'));
const LogisticsPage = lazy(() => import('./pages/logistics/logistics-page.jsx'));
const TrackingPage = lazy(() => import('./pages/tracking/tracking-page.jsx'));
const NewsPage = lazy(() => import('./pages/news/news-page.jsx'));
const NotFoundPage = lazy(() => import('./pages/others/not-found-page.jsx'));

function App() {

    const location = useLocation();
    const {variant} = useSelector(selectUI);

    return (
        <ThemeProvider defaultMode="system" theme={variant === 'dark' ? THEMES.darkTheme : THEMES.lightTheme}>
            <CssBaseline enableColorScheme={true}/>
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route
                        index={true}
                        path="/"
                        element={
                            <Suspense fallback={<Splash />}>
                                <PageTransitionWrapper>
                                    <HomePage />
                                </PageTransitionWrapper>
                            </Suspense>
                        }
                    />

                    <Route
                        path="/about"
                        element={
                            <Suspense fallback={<Splash />}>
                                <PageTransitionWrapper>
                                    <AboutPage />
                                </PageTransitionWrapper>
                            </Suspense>
                        }
                    />

                    <Route
                        path="/contact"
                        element={
                            <Suspense fallback={<Splash />}>
                                <PageTransitionWrapper>
                                    <ContactPage />
                                </PageTransitionWrapper>
                            </Suspense>
                        }
                    />

                    <Route
                        path="/services"
                        element={
                            <Suspense fallback={<Splash />}>
                                <PageTransitionWrapper>
                                    <ServicesPage />
                                </PageTransitionWrapper>
                            </Suspense>
                        }
                    />

                    <Route
                        path="/logistics"
                        element={
                            <Suspense fallback={<Splash />}>
                                <PageTransitionWrapper>
                                    <LogisticsPage />
                                </PageTransitionWrapper>
                            </Suspense>
                        }
                    />

                    <Route
                        path="/tracking"
                        element={
                            <Suspense fallback={<Splash />}>
                                <PageTransitionWrapper>
                                    <TrackingPage />
                                </PageTransitionWrapper>
                            </Suspense>
                        }
                    />

                    <Route
                        path="/news"
                        element={
                            <Suspense fallback={<Splash />}>
                                <PageTransitionWrapper>
                                    <NewsPage />
                                </PageTransitionWrapper>
                            </Suspense>
                        }
                    />

                    <Route
                        path="/privacy"
                        element={
                            <Suspense fallback={<Splash />}>
                                <PageTransitionWrapper>
                                    <PrivacyPage />
                                </PageTransitionWrapper>
                            </Suspense>
                        }
                    />

                    <Route
                        path="/terms"
                        element={
                            <Suspense fallback={<Splash />}>
                                <PageTransitionWrapper>
                                    <TermsPage />
                                </PageTransitionWrapper>
                            </Suspense>
                        }
                    />

                    <Route
                        path="*"
                        element={
                            <Suspense fallback={<Splash />}>
                                <PageTransitionWrapper>
                                    <NotFoundPage />
                                </PageTransitionWrapper>
                            </Suspense>
                        }
                    />
                </Routes>
            </AnimatePresence>
        </ThemeProvider>
    )
}

export default App
