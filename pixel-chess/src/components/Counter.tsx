import { createSignal } from "solid-js";
import s from "./Counter.module.css";

export default function Counter() {
  const [count, setCount] = createSignal(0);
  return (
    <button
      class={s.increment}
      onClick={() => setCount(count() + 1)}
      type="button"
    >
      Clicks: {count()}
    </button>
  );
}
