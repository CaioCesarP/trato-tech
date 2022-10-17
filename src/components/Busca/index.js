import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { mudarBusca, resetarBusca } from "store/reducers/busca";
import styles from "./Busca.module.scss";

export default function Busca() {
  const location = useLocation();
  const dispatch = useDispatch();
  const busca = useSelector((state) => state.busca);

  useEffect(() => {
    dispatch(resetarBusca());
  }, [dispatch, location.pathname]);

  const buscando = (value) => {
    dispatch(mudarBusca(value));
  };

  return (
    <div className={styles.busca}>
      <input className={styles.input} placeholder="O que você procura?" value={busca} onChange={(event) => buscando(event.target.value)} />
    </div>
  );
}
