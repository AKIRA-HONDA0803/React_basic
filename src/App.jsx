import { useEffect, useState } from "react";
import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {
  console.log("レンダリング");
  const [num, setNum] = useState(0);
  const onClickButton = () => {
    // setNum(num + 1);
    setNum((prev) => prev + 1);
  };

  // 第一引数にはアロー関数で処理を記述、第二引数は配列で必ず指定
  // useEffect(実行する関数, [依存する値]);
  useEffect(() => {
    alert();
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColoredMessage color="blue"> お元気ですか？ </ColoredMessage>
      {/* <p style={contentPinkStyle}>元気です！</p> */}
      <ColoredMessage color="pink"> 元気です！ </ColoredMessage>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
    </>
  );
};
