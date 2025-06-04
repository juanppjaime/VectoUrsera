import { useState, useEffect } from 'react';
import styles from './VideoSection.module.css';

function VideoSection({ video }) {
  const [completed, setCompleted] = useState(() => {
    const saved = localStorage.getItem(video.id);
    return saved === 'true';
  });

  useEffect(() => {
    localStorage.setItem(video.id, completed);
  }, [completed, video.id]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h3 className={styles.title}>{video.title}</h3>
        <button
          onClick={() => setCompleted(!completed)}
          className={`${styles.button} ${completed ? styles.completed : ''}`}
        >
          {completed ? 'Completado ✅' : 'Marcar como hecho'}
        </button>
      </div>
      <div className={styles.videoContainer}>
        <iframe
          src={video.url}
          title={video.title}
          frameBorder="0"
          allowFullScreen
          className={styles.iframe}
        ></iframe>
      </div>
    </div>
  );
}

export default VideoSection;
