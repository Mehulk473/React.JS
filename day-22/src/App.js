import React from 'react'
import Button from '@mui/material/Button';

const App = () => {
  return (
    <>
    <Button
    sx={[
      (theme) => ({
        color: '#fff',
        backgroundColor: theme.palette.primary.main,
        ...theme.applyStyles('dark', {
          backgroundColor: theme.palette.secondary.main,
        }),
        '&:hover': {
          boxShadow: theme.shadows[3],
          backgroundColor: theme.palette.primary.dark,
          ...theme.applyStyles('dark', {
            backgroundColor: theme.palette.secondary.dark,
          }),
        },
      }),
    ]}
  >
    Submit
  </Button>;
  </>
  )
}

export default App
