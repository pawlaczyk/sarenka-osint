import Link from "next/link";
import classes from "./main-menu.module.css";

function MainMenu() {
  return (
    <nav className={classes.sidebar}>
      {/* Hamburger menu */}
      <div className={classes.hamburgerMenu}>
          {/* wiele klas */}
          <div className={[classes.line, classes.line1].join(" ")}></div>
          <div className={[classes.line, classes.line2].join(" ")}></div>
          <div className={[classes.line, classes.line3].join(" ")}></div>
      </div>

      <ul className={classes.list}>
        <li className={classes.item}>
          <Link href="/credentials">
            <a href="#" className={classes.link}>
              <span className={classes.text}>Credentials</span>
            </a>
          </Link>
        </li>

        <li className={classes.item}>
          <Link href="/auth">
            <a href="#" className={classes.link}>
              <span className={classes.text}>Login</span>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default MainMenu;