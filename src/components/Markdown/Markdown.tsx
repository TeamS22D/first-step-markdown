import React, { useState } from "react";
import MarkdownPreview from "../MarkdownPreview/MarkdownPreview";
import Toolbar from "../Toolbar/Toolbar";
import * as S from './Markdown.style';

function Markdown() {
  const [markdown, setMarkdown] = useState<string>("# 입력해주세요");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(e.target.value);
  };

  

  return (
    <>
      <S.Container>
        <S.Wrapper>
          <Toolbar></Toolbar>
          <S.Textarea
            value={markdown}
            onChange={handleChange}
            placeholder="Markdown 문법으로 작성하세요"
          />
        </S.Wrapper>

        <S.Preview>
          <MarkdownPreview markdown={markdown} />
        </S.Preview>
      </S.Container>
    </>
  );

}

export default Markdown;

