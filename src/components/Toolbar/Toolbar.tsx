import { Bold, Italic, ALargeSmall, List } from "lucide-react";
import { useState } from "react";
import * as S from "./Toolbar.style";

type ToolbarProps = {
  textareaRef: React.RefObject<HTMLTextAreaElement>;
};

function Toolbar({ textareaRef }: ToolbarProps) {
  const [activeIcon, setActiveIcon] = useState<string | null>(null);

  const flashIcon = (iconKey: string) => {
    setActiveIcon(iconKey); 
    setTimeout(() => {
      setActiveIcon(null);
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
        data-active={activeIcon === 'bold'}
        onClick={() => {
          flashIcon("bold");
          handleInsert("**", '2');
        }}
      >
        <Bold />
      </S.IconButton>

      <S.IconButton
        data-aactive={activeIcon === "italic"}
        onClick={() => {
          flashIcon("italic");
          handleInsert("~~", '2');
        }}
      >
        <Italic />
      </S.IconButton>

      <S.IconButton
        data-aactive={activeIcon === "list"}
        onClick={() => {
          flashIcon("list");
          handleInsert("- ", '1');
        }}
      >
        <List />
      </S.IconButton>

      <S.IconButton
        data-aactive={activeIcon === "alargesmall"}
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
