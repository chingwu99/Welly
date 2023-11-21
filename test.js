//1.JavaScript: 字串反轉
function reverseString(str) {
  let newStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }

  return newStr;
}

console.log(reverseString("Hello"));

//2.JavaScript: 陣列過濾
function filterNumbersGreaterThanFive(numbers) {
  return numbers.filter((number) => number > 5);
}

const numbers = [2, 8, 4, 10, 1, 7];
console.log(filterNumbersGreaterThanFive(numbers));

// 3. JavaScript: 重構
// 問題：重構這段程式碼並說明原因
// 答：透過邏輯運算符 && 代替 if() 使程式更加簡潔，此外 formattedName 透過改為陣列形式，並在最後用.join(" ")隔開 firstName 與 lastName，可以避免當 firstName 不為真但有 lastName 時，多出的空格

function formatName(firstName, lastName) {
  const formattedName = [];

  firstName && formattedName.push(firstName);
  lastName && formattedName.push(lastName);

  return formattedName.join(" ");
}

console.log(formatName("henry", "wu"));

// 4. React: 條件渲染
// 問題：在React中，如何根據條件渲染兩種不同的內容？

export function ConditionalRendering({ isLoggedIn }) {
  if (isLoggedIn) return <div>loading</div>;

  return <div>success</div>;
}

// 5. React: 組件
// 問題：使用React創建一個簡單的計數器組件，具有增加和減少計數的按鈕。
import React, { useState } from "react";

export const Count = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>增加</button>
      <button onClick={() => count > 0 && setCount((prev) => prev - 1)}>
        減少
      </button>
      <p>{count}</p>
    </div>
  );
};
