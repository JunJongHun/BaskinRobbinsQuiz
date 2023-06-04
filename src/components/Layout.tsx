import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <section className="bg-baskin-robbins-background max-w-md h-screen m-auto">
      <Outlet />
    </section>
  );
}

export default Layout;
