import "./App.css";
import WithoutRedux from "./components/without_redux";
import WithRedux from "./components/with_redux";

function App() {
  return (
    <div className="App">
      <h1>
        'Render'는 'state'를 보고있다. state가 변경되면 Re-rendering한다. 은행과
        같은 역할을 하는'store'를 생각하자.
      </h1>
      'store.subscribe(render)'를 통해서 말이다.. 섭스크라이브를 이용하여
      스테이트가 변경될 때 구동될 함수를 록하도록 해서 말이지. <br />
      !!! 'action'이라는 객체를 'dispatch'에게 전달한다. <br />
      디스패치의 업무는 이러하다. 리듀서를 호출해서 스테이트의 값을 바꾼다. 이
      때 (현재의 스테이트값, 액션) 이렇게 2개를 인자로 공급한다. 리듀서는
      스테이트를 입력값을 받고, 액션을 참조하여 새로운 스테이트값을 만들어서
      리턴하여 새로운 스테이트를 저장한다. 결국은 스테이트를 가공하는 놈이다.
      그렇게 해서 새로운 스테이트를 'store'에 저장한다. 그러면 디스패치가
      섭스크라이브에 등록되있는 구독자들을 모두 호출한다. 그럼 렌더가 호출되고
      'getstate'라는 은행원을 통해 현재 스테이트를 받아오고 렌더링이 실행된다.
      <WithoutRedux />
      <WithRedux />
    </div>
  );
}

export default App;
