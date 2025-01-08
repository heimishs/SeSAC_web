import { ClassProps, ClassProps2 } from "./components/ClassProps";
import {
  FunctionProps,
  FunctionProps2,
  FunctionProps3,
  FunctionProps4,
} from "./components/FunctionProps";

import ClassState from "./components/ClassState";
import FunctionState from "./components/FunctionState";

import FunctionEx from "./components/practice/FunctionEx";

import ClassEx from "./components/practice/ClassEx";
import SyntheticEvent from "./components/SyntheticEvent";
import Counter from "./components/Counter";
import HandlerEx from "./components/ex/HandlerEx";
import EventHandler from "./components/practice/EventHandler";
import TextEvent from "./components/practice/TextEvent";
import EventAdd from "./components/practice/EventAdd";
import ChangeObj from "./components/practice/ChangeObj";
import PororoObj from "./components/practice/PororoObj";
import EventFult from "./components/EventFult";

function App() {
  return (
    <div>
      {/* <h2> props 사용</h2> */}
      {/* <h3>클래스형 props 사용해보기</h3>
      <ClassProps name="루피" color="pink" nickname="공주" />
      <ClassProps2 name="루피" color="pink" nickname="공주" fontColor="white" /> */}

      {/* <h3>함수영 컴포넌트 props 사용해보기</h3> */}
      {/* 숫자 bool 형같은 문자열이 아닌 자료형은 {}안에 작성한다 */}
      {/* <FunctionProps name="사과" number={5} krPrice={10000} />
      <FunctionProps2 name="사과" number={5} krPrice={10000} />
      <FunctionProps3 name="샤인머스켓" number={5} krPrice={10000} />
      <FunctionProps4 name="샤인머스켓" number={5} krPrice={10000}>
        <span style={{ color: "red" }}>children 요소입니다</span>
      </FunctionProps4>
      <FunctionProps4 name="샤인머스켓" number={5} krPrice={10000}>
        <span style={{ color: "red" }}>children 요소입니다</span>
      </FunctionProps4> */}

      {/* <h2>클래스형 State</h2>
      <ClassState />
      <h2>함수형 State</h2>
      <FunctionState />
      <FunctionEx />
      <ClassEx /> */}

      {/* <h2>EVENT</h2> */}
      {/* <SyntheticEvent /> */}

      {/* <Counter /> */}
      {/* <HandlerEx /> */}
      {/* <EventHandler /> */}
      {/* <TextEvent /> */}
      {/* <EventAdd /> */}
      {/* <PororoObj /> */}
      <EventFult />
    </div>
  );
}

// FunctionProps4.defaultProps = {
//   krPrice: 15000,
//   number: 10,
// };

export default App;
