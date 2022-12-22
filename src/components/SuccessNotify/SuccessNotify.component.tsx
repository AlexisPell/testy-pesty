import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { amber } from '@mui/material/colors';
import React from 'react';

const SuccessNotifyComponentWrapper = styled('div')({
  width: '100%',
  height: '100%',
  padding: '15px',
  display: 'flex',
  flexDirection: 'column',
  background: amber[600],
  minHeight: '300px',
});

interface SuccessNotifyComponentProps {
  script: string;
}
export const SuccessNotifyComponent: React.FC<SuccessNotifyComponentProps> = ({ script }) => {
  return (
    <SuccessNotifyComponentWrapper>
      <Typography variant='h4' textAlign='center'>
        Saved following script:
      </Typography>
      <Typography
        variant='h6'
        sx={{
          width: 'stretch',
          minHeight: '200px',
          border: `1px solid ${amber[300]}`,
          borderRadius: '5px',
          padding: '5px',
          fontSize: '16px',
          fontWeight: 'bold',
          background: '#fff',
          marginTop: '10px',
        }}
      >
        {script}
      </Typography>
    </SuccessNotifyComponentWrapper>
  );
};
