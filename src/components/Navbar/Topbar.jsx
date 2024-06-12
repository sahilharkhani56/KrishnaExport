import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
export const Topbar = () => {
  return (
    // <div >
    <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#97BE5A',
          color: '#fff',
          p: 1,
          position: 'absolute',
          width: '100%',
          zIndex: 1201, // Higher than AppBar
        }}
      >
        <Box sx={{ ml: 2, display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
            Krishna Export
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
          <IconButton color="inherit">
            <FacebookIcon />
          </IconButton>
          <IconButton color="inherit">
            <TwitterIcon />
          </IconButton>
          <IconButton color="inherit">
            <InstagramIcon />
          </IconButton>
        </Box>
      </Box>
    // </div>

  )
}
