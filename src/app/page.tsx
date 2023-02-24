import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import HeroImage from "./components/hero-image";

export default function Home() {
  return (
    <>
      <div className={styles.navbar}>
        <HeroImage name="logo.svg" width={80} height={50} />
      </div>

      <div className={styles.main}>
        <HeroImage name="hero-image.png" width={200} height={200} />
        <HeroImage name="hero-text.svg" width={280} height={100} />
      </div>

      <div className={styles.icons}>
        <a href="https://www.instagram.com/magnosiquiera/">
          <HeroImage name="instagram.svg" width={30} height={100} />
        </a>

        <a href="https://wa.me/5524981298663">
          <HeroImage name="whatsapp.svg" width={30} height={100} />
        </a>

        <a href="https://t.me/MagnoSiqueira7">
          <HeroImage name="telegram.svg" width={30} height={100} />
        </a>

        <a href="mailto:magnosiqueira.s@hotmail.com">
          <HeroImage name="email.svg" width={30} height={100} />
        </a>
      </div>
    </>
  );
}
