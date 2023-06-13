import { Outlet } from 'react-router-dom';
import Footer from './common/Footer';

function Layout() {
  return (
    <section className="flex flex-col bg-baskin-robbins-background max-w-md  min-h-screen h-auto m-auto">
      <Outlet />
      <Footer />
    </section>
  );
}

export default Layout;
