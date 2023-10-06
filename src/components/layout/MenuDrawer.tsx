import { Divider, Drawer, IconButton, List } from '@mui/material';
import { Box } from '@mui/system';
import { useRouter } from 'next/router';
import React, { Fragment } from 'react';
import CloseIcon from '@mui/icons-material/Close';

import { TMenuDrawerGroup } from '@/types/menuDrawer';
import MenuDrawerItem from '../parts/MenuDrawerItem';
import Image from 'next/image';

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MenuDrawer = (props: TProps) => {
  // props
  const { open, setOpen } = props;
  // hooks
  const router = useRouter();
  // functions
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setOpen(open);
    };
  const handleClose = () => {
    setOpen(false);
  };

  const DrawerInfo: TMenuDrawerGroup[] = [
    {
      groupName: 'Top',
      contents: [
        {
          name: 'TOP',
          onClick: () => router.push('/'),
          primary: true,
        },
      ],
    },
    {
      groupName: 'Concerts',
      contents: [
        {
          name: 'Concerts',
          onClick: () => router.push('/#upcoming_jump'),
          primary: true,
        },
        {
          name: 'Upcoming',
          onClick: () => router.push('/#upcoming_jump'),
          primary: false,
        },
        {
          name: 'Past',
          onClick: () => router.push('/#past_jump'),
          primary: false,
        },
      ],
    },
    {
      groupName: 'About',
      contents: [
        {
          name: 'About',
          onClick: () => router.push('/about'),
          primary: true,
        },
        {
          name: 'Activity',
          onClick: () => router.push('/about#activity_jump'),
          primary: false,
        },
        {
          name: 'Event',
          onClick: () => router.push('/about#event_jump'),
          primary: false,
        },
      ],
    },
    {
      groupName: 'Join',
      contents: [
        {
          name: 'Join',
          onClick: () => router.push('/join'),
          primary: true,
        },
      ],
    },
  ];

  const list = () => (
    <Box
      sx={{ width: '100%', backgroundColor: 'black.main' }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50px',
          width: '100%',
        }}
      >
        <Box
          sx={{
            width: '100%',
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
          <IconButton onClick={handleClose}>
            <CloseIcon sx={{ color: 'white', fontSize: '30px' }} />
          </IconButton>
        </Box>
      </Box>
      <List>
        {DrawerInfo.map((group, index) => (
          <Box sx={{ mb: 3 }} key={index}>
            <Box>
              {group.contents.map((item, itemIndex) => (
                <Fragment key={itemIndex}>
                  <MenuDrawerItem {...item} />
                  <Divider
                    sx={{
                      backgroundColor: 'black.contrastText',
                    }}
                  />
                </Fragment>
              ))}
            </Box>
          </Box>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
      {list()}
    </Drawer>
  );
};

export default MenuDrawer;
