import { NavLink, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <div>
      <header className={styles.header}>
        <nav>
          <NavLink to="/" className={styles.link}>Home</NavLink>
          <NavLink to="/movies" className={styles.link}>Movies</NavLink>
        </nav>
      </header>
      <main>
        <Outlet /> { }
      </main>
    </div>
  );
};

export default Layout;
