import { Bold, Italic, ALargeSmall, List } from "lucide-react";
import { useState } from "react";
import * as S from "./Toolbar.style";

type ToolbarProps = {
  textareaRef: React.RefObject<HTMLTextAreaElement>;
};

function Toolbar({ textareaRef }: ToolbarProps) {
  const [activeIcons, setActiveIcons] = useState<string[]>([]);

  const toggleIcon = (iconKey: string) => {
    setActiveIcons(prev =>
      prev.includes(iconKey)
        ? prev.filter(key => key !== iconKey)
        : [...prev, iconKey]
    );
  };

  const handleInsert = (insertText: string) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const { selectionStart, selectionEnd, value } = textarea;
    const before = value.substring(0, selectionStart);
    const selected = value.substring(selectionStart, selectionEnd);
    const after = value.substring(selectionEnd);

    const newValue = before + insertText + selected + insertText + after;
    textarea.value = newValue;
    textarea.focus();
  };

  
  return (
    <S.ToolbarContainer>
      <S.IconButton
        active={activeIcons.includes("bold")}
        onClick={() => {
          toggleIcon("bold");
          handleInsert("**");
        }}
      >
        <Bold />
      </S.IconButton>

      <S.IconButton
        active={activeIcons.includes("italic")}
        onClick={() => {
          toggleIcon("italic");
          handleInsert("_");
        }}
      >
        <Italic />
      </S.IconButton>

      <S.IconButton
        active={activeIcons.includes("list")}
        onClick={() => {
          toggleIcon("list");
          handleInsert("- ");
        }}
      >
        <List />
      </S.IconButton>

      <S.IconButton
        active={activeIcons.includes("alargesmall")}
        onClick={() => {
          toggleIcon("alargesmall");
          handleInsert("# ");
        }}
      >
        <ALargeSmall />
      </S.IconButton>
    </S.ToolbarContainer>
  );
}

export default Toolbar;
