import { Background } from '@/components/background';
import styles from './index.module.scss';
import Taskbar from '@/components/taskbar';
import DesktopContent from '@/components/desktop_content';
import Head from 'next/head';
import useAppStore from 'stores/app';
import { useEffect } from 'react';

export default function Layout({ children }: any) {
  const { init } = useAppStore((state) => state);
  useEffect(() => {
    (async () => {
      // Initialize, get user information, install application information, etc.
      await init();
    })();
  }, [init]);

  return (
    <>
      <Head>
        <title>Sealos Desktop</title>
        <meta name="description" content="sealos cloud dashboard" />
      </Head>
      <div className={styles.desktopContainer}>
        <Background />
        <DesktopContent />
        <Taskbar />
      </div>
    </>
  );
}
