'use client'
import { useCallback, useState } from 'react';
import Image from 'next/image';
import Food0 from '/public/food0.png'
import Food1 from '/public/food1.png'
import Food2 from '/public/food2.png'

export default function List() {
  const [items, setItems] = useState([
    { name: 'Tomato', price: 40, img: 'food0.png', qty:0 }, // Food0 사용하려면 Image 태그로...
    { name: 'Pasta', price: 80, img: 'food1.png', qty: 0 },
    { name: 'Coconut', price: 25, img: 'food2.png', qty:0 }
  ]);
  // let [count, setCount] = useState([ITEMS[0].qty, ITEMS[1].qty, ITEMS[2].qty]);

const handleCountChange = (index, delta) => {
  setItems(prevItem => {
    const copyItem = [...prevItem];
    copyItem[index].qty += delta;
    return copyItem;
  }) //아이템들을 카피한 후 받아온 delta 값으로 더해주고 그 값들을 리턴해서 setItems() 전체 변경
}
  return (
    <div>
      <h2>Products</h2>
      {items.map((item, index)=>{
        return (
          <div className="food" key={'food'+ index}>
            {/* <Image src={item.img} className="food-img"/> */}
            {/* Image 태그를 사용할 때는 이미지를 public 에서 import (@/public/food0.png) 해줘서 img에 넣어줘야 나옴 */}
            <img src={item.img} className="food-img"/>
            {/* 외부 이미지 경로 넣을 때는 width, height 속성 필수로 들어가야 함 width={} height={} */}
            {/* next.config.js에 세팅도 필요! */}
            <h4>{item.name}: $ {item.price} </h4>
            <button onClick={()=>{handleCountChange(index, -1)}}>-</button>
            <span> {item.qty} </span>
            <button onClick={()=>{handleCountChange(index, 1)}}>+</button>
          </div>
        ) // 함수를 호출해야 인자를 넣을 수 있기 때문에 화살표 함수 방식으로 구현
      })}
    </div>
  )
}
