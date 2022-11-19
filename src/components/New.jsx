import styles from "../styles/New.module.scss";

export function New() {
  return (
    <main className={styles.new}>
      <h2 className={styles.new__title}>New</h2>
      <section className={styles.new__section}>
        <article className={styles.section__article}>
          <h3 className={styles.section__title}>
            <a href="">Hydrogen VS Electric Cars</a>
          </h3>
          <p className={styles.section__about}>
            {" "}
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>
        </article>
        <article className={styles.section__article}>
          <h3 className={styles.section__title}>
            <a href="">The Downsides of AI Artistry</a>
          </h3>
          <p className={styles.section__about}>
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
        </article>
        <article className={styles.section__article}>
          <h3 className={styles.section__title}>
            <a href="">Is VC Funding Drying Up?</a>
          </h3>
          <p className={styles.section__about}>
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </article>
      </section>
    </main>
  );
}
