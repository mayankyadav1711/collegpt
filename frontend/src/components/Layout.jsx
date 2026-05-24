import { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const Layout = () => {
  const scrollRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Initialize LocomotiveScroll
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1.0,
      class: 'is-revealed'
    });

    // Update scroll when location (route) changes
    // This is important because React Router transitions don't automatically update Locomotive Scroll
    const timer = setTimeout(() => {
      if (scroll) {
        scroll.update();
        scroll.scrollTo(0, { duration: 0, disableLerp: true });
      }
    }, 150);

    return () => {
      if (scroll) scroll.destroy();
      clearTimeout(timer);
    };
  }, [location.pathname]);

  return (
    <>
      <Header />
      <div data-scroll-container ref={scrollRef}>
        <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-950">
          <main className="flex-grow pt-16 md:pt-20 px-4" data-scroll-section>
            <Outlet />
          </main>
          <Footer data-scroll-section />
        </div>
      </div>
    </>
  );
};

export default Layout;