import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './components.module.css';
import { BsLinkedin } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { TbGridDots } from 'react-icons/tb';
import { BsPerson } from 'react-icons/bs';
import logo from '../public/favicon.png';

const Navbar = () => {
  function myFunction() {
    var x = document.getElementById("menu");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }
  function disable(){
    document.getElementById('menu').style.display="none";
  }
  return (
    <>
      <div className={styles.navbar}>
      <Link href='/'>
        <div className={styles.logo}>
          <Image src={logo} className={styles.logoimg}  alt='REACTJSOFFICIAL'/>
          REACTJS
        <span>OFFICIAL</span>
        </div>
        </Link>
        <div className={styles.menubox}>
      <Link className={styles.a} href="/">Home</Link>
      <Link className={styles.a} href="/courses">Courses</Link>
      <Link className={styles.a} href="/career">Careers</Link>
      <Link className={styles.a} href="/community">Community</Link>
      <Link className={styles.a} href="/contact">Contact</Link>
      </div>
      <div className={styles.menubox2} id='menu'>
      <Link className={styles.a} onClick={disable} href="/">Home</Link>
      <Link className={styles.a} onClick={disable} href="/courses">Courses</Link>
      <Link className={styles.a} onClick={disable} href="/career">Careers</Link>
      <Link className={styles.a} onClick={disable} href="/community">Community</Link>
      <Link className={styles.a} onClick={disable} href="/contact">Contact</Link>
      </div>
      <div className={styles.topicons}>
        <a href="https://www.instagram.com/reactjsofficial/"><BsInstagram className={styles.BsInstagram} /></a>
        <a href="https://chat.whatsapp.com/FWRWiR3mtH49DusKSmDgX6"><BsWhatsapp className={styles.BsWhatsapp} /></a>
        <a href='https://www.linkedin.com/company/reactjsofficial/'><BsLinkedin className={styles.BsLinkedin} /></a>
        <Link href="/join/selectbatch" className={styles.btnwithback3}>Enroll Now</Link>
        <TbGridDots className={styles.TbGridDots} onClick={myFunction} />
        </div>
      </div>
    </>
  );
}

export default Navbar;