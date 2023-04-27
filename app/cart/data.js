//데이터 만들어서 page.js에서 가져와서 사용

let age = 20;
let name = 'kim';
let banner = ['현대카드', '삼성카드', '롯데카드'];
const Hello = () => {
  return (
    <div>
      <h2>안녕하세요!</h2>
    </div>
  )
}

export { age, name, Hello, banner };