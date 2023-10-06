import { AppBar, Box, IconButton } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';

type TProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = (props: TProps) => {
  // props
  const { setOpen } = props;
  // functions
  const handleClick = () => {
    console.log('click');
    setOpen(true);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: 'black.main', height: '50px' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: 2,
          boxShadow: 'none',
        }}
      >
        <Image
          src="/logo.png"
          alt="logo"
          width={180}
          height={50}
          style={{
            objectFit: 'contain',
            position: 'relative',
          }}
        />
        <IconButton onClick={handleClick}>
          <MenuIcon sx={{ color: 'white', fontSize: '30px' }} />
        </IconButton>
      </Box>
    </AppBar>
  );
};

export default Header;
