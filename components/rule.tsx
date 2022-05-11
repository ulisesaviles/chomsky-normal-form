import styles from "../styles/components/Rule.module.css";

interface props {
  rule: string;
}

const rule = ({ rule }: props) => <span className={styles.rule}>{rule}</span>;

export default rule;
