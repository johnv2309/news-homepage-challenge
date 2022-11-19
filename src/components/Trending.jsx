import retroPcs from "../assets/images/image-retro-pcs.jpg";
import topLaptops from "../assets/images/image-top-laptops.jpg";
import gaming from "../assets/images/image-gaming-growth.jpg";
import styles from "../styles/Trending.module.scss";

export function Trending() {
  return (
    <>
      <article className={styles.trending__article}>
        <img className={styles.trending__image} src={retroPcs} />
        <div className={styles.trending__about}>
          <span>01</span>
          <h2>
            <a href="">Reviving Retro PCs</a>
          </h2>
          <p>What happens when old PCs are given modern upgrades?</p>
        </div>
      </article>
      <article className={styles.trending__article}>
        <img className={styles.trending__image} src={topLaptops} />
        <div className={styles.trending__about}>
          <span>02</span>
          <h2>
            <a href="">Top 10 Laptops of 2022</a>
          </h2>
          <p>Our best picks for various needs and budgets.</p>
        </div>
      </article>
      <article className={styles.trending__article}>
        <img className={styles.trending__image} src={gaming} />
        <div className={styles.trending__about}>
          <span>03</span>
          <h2>
            <a href="">The Growth of Gaming</a>
          </h2>
          <p>How the pandemic has sparked fresh opportunities.</p>
        </div>
      </article>
    </>
  );
}
