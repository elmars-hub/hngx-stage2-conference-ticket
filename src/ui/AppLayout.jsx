import Header from './Header';
import { Outlet } from 'react-router-dom';

function AppLayout() {
  return (
    <div className="gradient min-h-screen">
      <Header />

      <main className="mx-auto max-w-3xl">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
