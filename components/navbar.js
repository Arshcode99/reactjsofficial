import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './components.module.css'
import { TbGridDots } from 'react-icons/tb'
import { BsLinkedin } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'
import logo from '../public/favicon.png'

const Navbar = () => {
  function myFunction() {
    var x = document.getElementById("menu");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <Image src={logo} className={styles.logoimg}/>
          REACTJS
        <span>OFFICIAL</span>
        </div>
        <div className={styles.topicons}>
        <TbGridDots className={styles.TbGridDots} onClick={myFunction}/>
        </div>
        <div className={styles.menubox} id='menu'>
          <Link className={styles.a} href="/">Home</Link>
          <Link className={styles.a} href="/">Courses</Link>
          <Link className={styles.a} href="/">Careers</Link>
          <Link className={styles.a} href="/">Community</Link>
          <div className={styles.social}>
          <BsWhatsapp className={styles.BsWhatsapp}/>
        <BsInstagram className={styles.BsInstagram}/>
        <BsLinkedin className={styles.BsLinkedin}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
