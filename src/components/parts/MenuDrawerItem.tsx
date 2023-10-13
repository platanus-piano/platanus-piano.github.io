import { ListItem, ListItemButton, Typography } from '@mui/material';
import React from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

type TProps = {
  name: string;
  onClick: () => void;
  primary: boolean;
};

const MenuDrawerItem = (props: TProps) => {
  // props
  const { name, onClick, primary } = props;

  return (
    <ListItem disablePadding>
      <ListItemButton
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
        onClick={onClick}
      >
        <Typography
          variant="body1"
          component="span"
          sx={{
            ml: 1,
            fontWeight: primary ? 'bold' : '400',
            color: 'black.contrastText',
          }}
        >
          {name}
        </Typography>
        <NavigateNextIcon
          sx={{
            fontSize: '20px',
            color: 'black.contrastText',
          }}
        />
      </ListItemButton>
    </ListItem>
  );
};

export default MenuDrawerItem;
