import React from "react";
import Logo from "../public/assets/images/logo.png";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import UserProfileImage from "../public/assets/images/userPic.png";
export const Navbar = () => {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.links}>
        <div className={styles.logo}>
          <Image src={Logo} alt="image" width={154}></Image>
        </div>
        <Link href={"/"}>
          <span>Menu one</span>
        </Link>
        <Link href={"/"}>
          <span>Menu one</span>
        </Link>
        <Link href={"/"}>
          <span>Menu one</span>
        </Link>
        <Link href={"/"}>
          <span>Menu one</span>
        </Link>
      </div>
      <div>
        <Image
          src={UserProfileImage}
          alt="image"
          width={50}
          height={50}
          style={{ borderRadius: "100%" }}
        ></Image>
      </div>
    </nav>
  );
};
