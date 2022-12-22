import styled from '@emotion/styled';
import { amber } from '@mui/material/colors';

const EditorWrapper = styled('textarea')({
  width: 'stretch',
  minHeight: '200px',
  border: `1px solid ${amber[300]}`,
  borderRadius: '5px',
  padding: '5px',
  fontSize: '16px',
  fontWeight: 'bold',
  background: '#fff',
});
interface EditorProps {
  editor: string;
  setEditor: React.Dispatch<React.SetStateAction<string>>;
}
export const Editor: React.FC<EditorProps> = ({ editor, setEditor }) => {
  const onEdit = (text: string) => setEditor(text);

  return <EditorWrapper value={editor} onChange={(e) => onEdit(e.target.value)}></EditorWrapper>;
};
