import { Outlet } from 'react-router-dom';
import Footer from './common/Footer';

function Layout() {
  return (
    <section className="bg-baskin-robbins-background max-w-md h-auto m-auto">
      <Outlet />
      <Footer />
    </section>
  );
}

export default Layout;
