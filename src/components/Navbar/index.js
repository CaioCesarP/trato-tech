import styles from "./Navbar.module.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import classNames from "classnames";
import { RiShoppingCart2Line, RiShoppingCartFill } from "react-icons/ri";
import Busca from "../Busca";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const iconeProps = {
  color: "white",
  size: 24,
};

export default function Navbar() {
  const carrinho = useSelector((state) => state.carrinho);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className={styles.nav}>
      <Logo className={styles.logo} onClick={() => navigate("/")} />
      <div className={styles.links}>
        <div>
          <Link
            to="/"
            className={classNames(styles.link, {
              [styles.selected]: location.pathname === "/",
            })}
          >
            Página inicial
          </Link>
        </div>
      </div>
      <div className={styles.busca}>
        <Busca />
      </div>
      <div className={styles.icones}>
        {carrinho?.length > 0 && <p className={styles["icones-count"]}>{carrinho?.length}</p>}
        <Link to="/carrinho">{carrinho?.length > 0 ? <RiShoppingCartFill {...iconeProps} /> : <RiShoppingCart2Line {...iconeProps} />}</Link>
      </div>
    </nav>
  );
}
