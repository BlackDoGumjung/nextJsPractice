'use client'

import { age, name, Hello, banner } from './data.js';

export default function Cart() {
  let ITEMS = [ { name: 'Tomato', price: 40, img: 'food0.png' }, // Food0 사용하려면 Image 태그로...
                { name: 'Pasta', price: 80, img: 'food1.png' },
                { name: 'Coconut', price: 25, img: 'food2.png' }];
  return (
    <div>
      <h4 className="title">Cart</h4>
      {
        ITEMS.map((item, i)=>{
          return (
            <CartItem key={i} name={item.name} price={item.price}/>
          )
        })
      }
      {
        banner.map((item, i)=>{
          return (
            <Banner key={i} content={item}/>
          )
        })
      }
      <RedBtn color="pink"/>
      <RedBtn color="skyblue"/>
      {/* <Hello/>
      <div>{age}, {name}</div> */}
    </div>
  )

}

function CartItem(props){
  return (
    <div className="cart-item">
      <p>{props.name}</p>
      <p>$ {props.price}</p>
      <p>1개</p>
    </div>
  )
}

function RedBtn(props){
  return <button style={{background: props.color}}>Red Btn</button>
}


function Banner(props){
  return <h4>{props.content} 결제 행사 중!</h4>
}
//component 만드는 방법
//일단 다른 함수 밖에서 만들어야한다...
//1. function 작명() {}
//2. return (축약할 html)
//3. 작명한 걸 그냥 쓰기 (import하고...)

//next.js에선 컴포넌트가 2개
//1. server component (아무데나 대충 만든 거) : js 기능 넣는 것 불가능 (useState, useEffect 사용 불가)\
//   : 로딩 속도 빠름, 검색 엔진 이점 (큰페이지는 서버 컴포넌트로!)
//2. client component (파일 맨 위에 'use client' 넣고 만드는 것 - js 기능 넣는 것 가능)
//   : 하이드레이션(=html 유저에게 보낸 후에 js html 다시 읽고 분석) 필요해서 로딩속도 느림

// props 문법 (파라미터와 비슷, 매번 다른 내용으로 function 실행하고 싶을 때 씀)
// 1. <자식Component 작명="전할데이터"/>
// 2. 자식은 props.작명 사용
// 3. 자식 -> 부모로는 전송 불가 (옆집 컴포넌트들끼리도 불가능)

// 같은 데이터 요청이 여러개면 1개로 압축해줌 (dedplication)