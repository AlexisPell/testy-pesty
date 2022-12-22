import { CodeEditorComponent } from './components/CodeEditor/CodeEditor.component';
import { Container } from '@mui/material';
import { blue } from '@mui/material/colors';
import './index.scss';
import { styled } from '@mui/system';
import { useState } from 'react';
import { SuccessNotifyComponent } from './components/SuccessNotify/SuccessNotify.component';

const AppWrapper = styled('div')({
  width: '100vw',
  height: '100vh',
  background: blue[500],
});

interface AppProps {}
export const App: React.FC<AppProps> = ({}) => {
  const [savedScript, setSavedScript] = useState(false);
  const [script, setScript] = useState('');

  const onSaveScript = (script: string) => {
    setScript(script);
    setSavedScript(true);
  };

  return (
    <AppWrapper>
      <Container maxWidth='sm'>
        {savedScript ? (
          <SuccessNotifyComponent script={script} />
        ) : (
          <CodeEditorComponent onSaveScript={onSaveScript} />
        )}
      </Container>
    </AppWrapper>
  );
};
