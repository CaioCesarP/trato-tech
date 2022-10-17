import styles from "./Footer.module.scss";
import { FaMailBulk, FaGithub, FaLinkedin } from "react-icons/fa";

const iconeProps = {
  color: "white",
  size: 24,
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <FaMailBulk {...iconeProps} />
        <FaGithub {...iconeProps} />
        <FaLinkedin {...iconeProps} />
      </div>
      <span>Desenvolvido por Caio César Ponte.</span>
    </footer>
  );
}
