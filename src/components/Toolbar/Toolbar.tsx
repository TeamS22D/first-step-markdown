import { Bold, Italic, ALargeSmall, List } from "lucide-react";
import { useState } from "react";
import * as S from "./Toolbar.style";

type ToolbarProps = {
  textareaRef: React.RefObject<HTMLTextAreaElement>;
};

function Toolbar({ textareaRef }: ToolbarProps) {
  const [activeIcon, setActiveIcon] = useState<string | null>(null);

  const flashIcon = (iconKey: string) => {
    setActiveIcon(iconKey); // 클릭하면 active 상태로 변경
    setTimeout(() => {
      setActiveIcon(null); // 1초 후 다시 비활성화
    }, 300);
  };

  const handleInsert = (insertText: string, 
    judgment: string) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const { selectionStart, selectionEnd, value } = textarea;
    const before = value.substring(0, selectionStart);
    const selected = value.substring(selectionStart, selectionEnd);
    const after = value.substring(selectionEnd);

    if (judgment === '1'){
      const newValue = before + insertText + selected + after;
      textarea.value = newValue;
      textarea.focus();
    }

    else if (judgment === '2'){
      const newValue = before + insertText + selected + insertText + after;
      textarea.value = newValue;
      textarea.focus();
    }
  };

  
  return (
    <S.ToolbarContainer>
      <S.IconButton
        active={activeIcon === 'bold'}
        onClick={() => {
          flashIcon("bold");
          handleInsert("**", '2');
        }}
      >
        <Bold />
      </S.IconButton>

      <S.IconButton
        active={activeIcon === "italic"}
        onClick={() => {
          flashIcon("italic");
          handleInsert("~~", '2');
        }}
      >
        <Italic />
      </S.IconButton>

      <S.IconButton
        active={activeIcon === "list"}
        onClick={() => {
          flashIcon("list");
          handleInsert("- ", '1');
        }}
      >
        <List />
      </S.IconButton>

      <S.IconButton
        active={activeIcon === "alargesmall"}
        onClick={() => {
          flashIcon("alargesmall");
          handleInsert("> ", '1');
        }}
      >
        <ALargeSmall />
      </S.IconButton>
    </S.ToolbarContainer>
  );
}

export default Toolbar;
