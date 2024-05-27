import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import NavBar from './NavBar'


const Layout = () => {

    return (
      <Box sx={{ flexGrow: 1 }} className="min-h-screen">
        <Grid container spacing={2}>
          <Grid xs={12} md={12} >
            <NavBar />
          </Grid>

        </Grid>
      </Box>
    );
  }

export default Layout

// import NavBar from './NavBar'
// import { PropTypes } from 'prop-types'

// const Layout = ({ children }) => {

//     return (
//         <div className="min-h-screen">
//             <NavBar/>
//             <div className='container mx-auto'>
//                 {children}
//             </div>
//         </div>
//     )
// }
// Layout.propTypes = {
//     children: PropTypes.node
// }
// export default Layout
