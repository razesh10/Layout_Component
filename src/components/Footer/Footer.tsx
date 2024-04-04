import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Footer = (props: any) => {
  const router = useRouter();
  const { footerData } = props;
  return (
    <div className={styles.footerContainer}>
      <div className={styles.FooterCol1Container}>
        {/* logo */}
        <div className={styles.footerLogo}>
          {footerData.logo.map((item: any, index: number) => (
            <Image
              key={index}
              onClick={() => router.push(item.href)}
              src={item.image}
              width={200}
              height={0}
              alt="Beeaver Tech"
            />
          ))}
        </div>
        {/* Newsletter */}
        <div className={styles.footerNewsLetterForm}>
          {footerData.newsletterForm}
        </div>
      </div>
      {/* footer columns */}
      <div className={styles.columns}>
        {footerData.columns.map((column: any, index: number) => (
          <div
            key={index}
            className={`${styles.footerImportantLink} ${styles.footerLink}`}
          >
            <h4 className={styles.footerTitle}>{column.title}</h4>
            <div className={styles.divider}></div>
            <ul
              className={`${styles.footerLinks} ${
                column.flex ? styles.flexRow : styles.flexColumn
              }`}
            >
              {column.links.map((item: any, index: any) => (
                <li onClick={() => router.push(item.href)} key={index}>
                  {item.logo ? (
                    <Image
                      src={item.logo}
                      width={column.flex ? 36 : 20}
                      height={column.flex ? 36 : 20}
                      alt=""
                    />
                  ) : (
                    ""
                  )}

                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
