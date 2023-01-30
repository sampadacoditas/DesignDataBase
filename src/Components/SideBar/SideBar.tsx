// import React from 'react'
// import Tree from '../../Pages/UserPage/TreeView/TreeView'

// export const SideBar = () => {
//   return (
//     <>
    
//     </>
//   )
// }
import * as React from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

export default function SideBar() {
  return (
    <div>
    <Box
      sx={{
        width: 100,
        height: 100,
        backgroundColor: 'white',
      }}
    > <Button>Save</Button>
    </Box>
    </div>
  );
}