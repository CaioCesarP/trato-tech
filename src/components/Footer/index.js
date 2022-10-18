import styles from "./Footer.module.scss";
import { FaMailBulk, FaGithub, FaLinkedin } from "react-icons/fa";

const iconeProps = {
  color: "white",
  size: 24,
  cursor: "pointer",
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <FaMailBulk onClick={() => window.open("mailto:caiocesarworks@gmail.com")} {...iconeProps} />
        <FaGithub onClick={() => window.open("https://github.com/CaioCesarP/trato-tech")} {...iconeProps} />
        <FaLinkedin onClick={() => window.open("https://www.linkedin.com/in/profile-caio-c%C3%A9sar-link/")} {...iconeProps} />
      </div>
      <span>Desenvolvido por Caio César Ponte.</span>
    </footer>
  );
}
