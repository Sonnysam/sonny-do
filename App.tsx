import FlashMessage from "react-native-flash-message";
import Todo from "./todo/Todo";

export default function App() {
  return (
    <>
      <Todo />
      <FlashMessage position={"top"} />
    </>
  );
}
