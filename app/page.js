import Image from 'next/image'
import styles from './page.module.css'
import Link from "next/link";

export default function Home() {
  let name = 'Choi';
  let age = 2;
  let link = 'http://google.com';
  let style1 = {color:'red', fontSize:'20px'}
  let style2 = {color:'#fff', fontSize:'10px', textDecoration: 'none'}
  return (
    <main>
      <div className="title">
        <h4 className="title-sub" style={style1}>APPLE FRESH {age}주년</h4>
        <p>by dev {name}</p>
        <a href={link} style={style2}>링크링크</a>
      </div>
    </main>
  )
}
