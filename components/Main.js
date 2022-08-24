import styles from "../styles/Main.module.css";
import Image from "next/image";
import FoodOverlay from "../public/assets/Food.png";
import FoodImage from "../public/assets/—Pngtree—delicious food_568171.png";
import FoodDots from "../public/assets/Group 1.png";
import { SearchBar } from "./SearchBar";
import { CityTag } from "./CityTag";
import { FoodCard } from "./FoodCard";
const Main = () => {
  const cardDetails = [
    {
      image: require("../public/assets/food-photographer-jennifer-pallian-306915-unsplash2.png"),
      title: "Fire water",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, culpa.",
    },
    {
      image: require("../public/assets/food-photographer-jennifer-pallian-306915-unsplash.png"),
      title: "The Wanton",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, culpa.",
    },
  ];
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.foodOverlay}>
          <Image src={FoodOverlay} alt="image"></Image>
          <div
            style={{
              position: "relative",
              whiteSpace: "nowrap",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span className={styles.heroText}>Discover Restaurant</span>
            <span className={styles.heroText}> & Delicious Food</span>
          </div>
          <SearchBar />
        </div>

        <div className={styles.foodImage}>
          <Image src={FoodImage} layout="responsive" alt="image" />
          <div className={styles.image}>
            <Image src={FoodDots} width={415} alt="image" />
          </div>
          <div className={styles.image2}>
            <Image src={FoodDots} width={415} alt="image" />
          </div>
        </div>
      </div>
      <CityTag />
      <section className={styles.mainContainer2}>
        <div className={styles.section2}>
          <span className={styles.section2_text}>
            some top restaurant for dining out or in
          </span>
          <span className={styles.section2_text2}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            quo pariatur dolore sunt repudiandae
          </span>
        </div>
        <div style={{ display: "flex" }}>
          {cardDetails.map((item, i) => (
            <FoodCard
              key={i}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>
      <section
        className={styles.mainContainer2}
        style={{ backgroundColor: "#FFEDDE" }}
      ></section>
    </>
  );
};

export default Main;
