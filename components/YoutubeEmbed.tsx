// Import styles
import styles from "../styles/components/YoutubeEmbed.module.css";

const YoutubeEmbed = ({ embedId }: { embedId: string }) => (
  <div className={styles.video_responsive}>
    <iframe
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

export default YoutubeEmbed;
