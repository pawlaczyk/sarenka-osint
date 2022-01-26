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
          <Link href="/">
            <a href="#" className={classes.link}>
              <span className={classes.text}>Search</span>
            </a>
          </Link>
        </li>

        <li className={classes.item}>
          <Link href="/cwe">
            <a href="#" className={classes.link}>
              <span className={classes.text}>CWE List</span>
            </a>
          </Link>
        </li>

        <li className={classes.item}>
          <Link href="/cve">
            <a href="#" className={classes.link}>
              <span className={classes.text}>CVE List</span>
            </a>
          </Link>
        </li>

      </ul>
    </nav>
  );
}

export default MainMenu;
