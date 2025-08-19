 import type { ReactNode } from 'react';
import { Header } from '../components/header/header.component';
import { Footer } from '../components/footer/footer.component';

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};