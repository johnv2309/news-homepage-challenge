import desktopImage from "../assets/images/image-web-3-desktop.jpg";
import mobileImage from "../assets/images/image-web-3-mobile.jpg";
import styles from "../styles/Popular.module.scss";
export function Popular() {
  return (
    <>
      <picture className={styles.popular__image}>
        <source media="(min-width:1025px)" srcSet={desktopImage} />
        <img src={mobileImage} alt="" aria-hidden="true" />
      </picture>
      <h1 className={styles.popular__title}>The Bright Future of Web 3.0?</h1>
      <p className={styles.popular__about}>
        We dive into the next evolution of the web that claims to put the power
        of the platforms back into the hands of the people. But is it really
        fulfilling its promise?
        <button href="#">Read more</button>
      </p>
    </>
  );
}
