import EventObj from "../components/EventObj";
import Container from "../components/lecture/Container";
import {
  PropsType1,
  PropsType2,
  PropsType3,
} from "../components/lecture/PropsTypes";
import TodoList from "../components/lecture/TodoList";
import SetText from "../components/SetText";

export default function Lecture() {
  return (
    <main>
      <PropsType1 name="allie" />
      <PropsType2 name="allie" width="100px" height="100px" color="red" />
      <PropsType3 width="100px" height="100px" text="hi" color="green" />
      <PropsType3 width="100px" height="100px" text="hi" color="pink" />
      <Container>
        <SetText />
        <EventObj />
        <TodoList />
      </Container>
    </main>
  );
}
