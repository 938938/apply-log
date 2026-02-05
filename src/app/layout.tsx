import type { Metadata } from 'next';
import './globals.css';
import ReduxToolkitProvider from '@/config/ReduxToolkitProvider';

export const metadata: Metadata = {
  title: 'Apply Log',
  description: '취준 관리 대시보드',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <ReduxToolkitProvider>
        <body className='flex justify-center'>{children}</body>
      </ReduxToolkitProvider>
    </html>
  );
}
