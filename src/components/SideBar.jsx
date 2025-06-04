import styles from './SideBar.module.css';

function Sidebar({ videos, onSelect, currentId }) {
  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.title}>Temario</h2>
      <ul className={styles.videoList}>
        {videos.map((video) => (
          <li
            key={video.id}
            onClick={() => onSelect(video.id)}
            className={`${styles.videoItem} ${currentId === video.id ? styles.active : ''}`}
          >
            {video.title}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
