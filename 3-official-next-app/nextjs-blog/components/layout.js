import classes from "./layout.module.css";

export default function Layout({ children }) {
  return <div className={classes.container}>{children}</div>;
}
