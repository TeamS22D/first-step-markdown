import { Bold, Italic, ALargeSmall, List } from 'lucide-react';
import { useState } from 'react';
import * as S from "./Toolbar.style";

function Toolbar() {
  const [activeIcons, setActiveIcons] = useState<string[]>([]);

  const toggleIcon = (iconKey: string) => {
    setActiveIcons(prev =>
      prev.includes(iconKey)
        ? prev.filter(key => key !== iconKey)
        : [...prev, iconKey]
    );
  };

  

  return (
    <S.ToolbarContainer>
      <S.IconButton
        active={activeIcons.includes('bold')}
        onClick={() => 
            toggleIcon('bold')
            
        }
      >
        <Bold />
      </S.IconButton>

      <S.IconButton
        active={activeIcons.includes('italic')}
        onClick={() => toggleIcon('italic')}
      >
        <Italic />
      </S.IconButton>

      <S.IconButton
        active={activeIcons.includes('list')}
        onClick={() => toggleIcon('list')}
      >
        <List />
      </S.IconButton>

      <S.IconButton
        active={activeIcons.includes('alargesmall')}
        onClick={() => toggleIcon('alargesmall')}
      >
        <ALargeSmall />
      </S.IconButton>
    </S.ToolbarContainer>
  );
}

export default Toolbar;
