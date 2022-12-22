import React, { useEffect, useState } from 'react';
import { styled } from '@mui/system';
import { amber, red } from '@mui/material/colors';
import { Box, Button, Typography } from '@mui/material';
import { useAutoAnimate } from '@formkit/auto-animate/react';

import { isValidJs } from '../../libs/utils/isValidJs';
import { Editor } from './Editor.component';

const CodeEditorComponentWrapper = styled('div')({
  width: '100%',
  height: '100%',
  padding: '15px',
  display: 'flex',
  flexDirection: 'column',
  background: amber[600],
});
interface CodeEditorComponentProps {
  onSaveScript: (script: string) => void;
}
export const CodeEditorComponent: React.FC<CodeEditorComponentProps> = ({ onSaveScript }) => {
  const [parent] = useAutoAnimate<HTMLDivElement>();
  const [editor, setEditor] = useState('Type here some js code...');
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    setIsValid(isValidJs(editor));
  }, [editor]);

  const onClickSave = () => {
    if (!isValid) return;
    onSaveScript(editor);
  };

  return (
    <CodeEditorComponentWrapper>
      <Typography variant='h4' textAlign='center' sx={{ marginBottom: '15px' }}>
        Javascript code editor
      </Typography>
      <Editor editor={editor} setEditor={setEditor} />

      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }} ref={parent}>
        {isValid && editor.length ? (
          <SaveButton onClickSave={onClickSave} />
        ) : (
          <ErrorMessage error='Invalid js code' />
        )}
      </Box>
    </CodeEditorComponentWrapper>
  );
};

const ErrorMessage: React.FC<{ error: string }> = ({ error }) => (
  <Typography variant='h6' color={`${red[600]}`}>
    {error}
  </Typography>
);
const SaveButton: React.FC<{ onClickSave: () => void }> = ({ onClickSave }) => (
  <Button sx={{ alignSelf: 'end', marginTop: '15px' }} variant='contained' onClick={onClickSave}>
    Save script
  </Button>
);
