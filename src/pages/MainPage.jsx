// 🎀 INTERFAZ CON CSS MODULES (SIN TAILWIND) 🎀

import { useState } from 'react';
import Sidebar from '../components/SideBar';
import VideoSection from '../components/VideoSection';
import styles from './MainPage.module.css';

const videoData = [
  { id: 'v1', title: 'Capítulo 1 - Gradiente', url: 'https://www.youtube.com/embed/jfeRaJ89mEQ?si=dSDP472NCkEuoqQP' },
  { id: 'v2', title: 'Capítulo 2 - Gradiente con sustitución', url: 'https://www.youtube.com/embed/ak_RgQkSu2s?si=jzlE0Q_ZwNl4wAeW' },
  { id: 'v3', title: 'Capítulo 3 - Gradiente y análisis', url: 'https://www.youtube.com/embed/tZ9Bqs9XPH8?si=4vQTJY787uAsN2CZ' },
];

function MainPage() {
  const [currentVideoId, setCurrentVideoId] = useState(videoData[0].id);
  const currentVideo = videoData.find((v) => v.id === currentVideoId);

  return (
    <div className={styles.container}>
      <Sidebar videos={videoData} onSelect={setCurrentVideoId} currentId={currentVideoId} />

      <main className={styles.mainContent}>
        <VideoSection video={currentVideo} />
      </main>
    </div>
  );
}

export default MainPage;
