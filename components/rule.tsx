// Import styles
import styles from "../styles/components/Rule.module.css";

// Define props interface
interface props {
  rule: string;
}

// Component to export
const rule = ({ rule }: props) => <span className={styles.rule}>{rule}</span>;

export default rule;
