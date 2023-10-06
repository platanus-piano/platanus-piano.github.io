import {
  AppBar,
  Box,
  IconButton,
  Slide,
  useScrollTrigger,
} from '@mui/material';
import Image from 'next/image';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';

type TProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type THideOnScrollProps = {
  children: React.ReactElement;
  window?: () => Window;
};

const HideOnScroll = (props: THideOnScrollProps) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
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
    <HideOnScroll>
      <AppBar sx={{ bgcolor: 'black.main', height: '60px' }}>
        <Box
          sx={{
            width: '100%',
            height: '100%',
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
    </HideOnScroll>
  );
};

export default Header;
