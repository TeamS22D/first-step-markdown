import React, { useState } from "react";
import MarkdownPreview from "./MarkdownPreview";

function App() {
  const [markdown, setMarkdown] = useState<string>("# 입력해주세요");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(e.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "100vh",
        color: "black",
        width: "100vw", 
        boxSizing: 'border-box',
      }}
    >
      {/* 입력 영역 */}
      <textarea
        style={{
          flex: 1,
          padding: "3rem",
          paddingTop:'10rem',
          fontSize: "1rem",
          border: "none",
          outline: "none",
          resize: "none",
          color: "#000000",
        }}
        value={markdown}
        onChange={handleChange}
        placeholder="Markdown 문법으로 작성하세요"
      />

      {/* 미리보기 영역 */}
      <div
        style={{
          flex: 1,
          padding: "3rem",
          paddingTop:'8rem',
          overflowY: "auto",
          borderLeft: "2px solid #444",
        }}
      >
        <MarkdownPreview markdown={markdown} />
      </div>
    </div>
  );
}

export default App;

