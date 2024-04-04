import React from "react";
import Styles from "./newsletter.module.css";
import RightArrow from "@/assets/right-arrow-svgrepo-com.svg";
import Image from "next/image";

const NewsLetter = () => {
  return (
    <div className={Styles.newsLetterContainer}>
      <p>Subscribe to our Newsletter</p>
      <div className={Styles.newsLetterForm}>
        <input type="text" placeholder="sample@gmail.com" />
        <div className={Styles.subscribeBtn}>
          <Image src={RightArrow} width={20} height={20} alt="subscribe" />
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
