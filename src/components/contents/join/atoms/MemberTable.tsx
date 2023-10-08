import {
  Box,
  SxProps,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import React from 'react';

type TProps = {
  sx?: SxProps;
};

function createData(grade: string, number: number | string) {
  return { grade, number };
}

const rows = [
  createData('1年生', 10),
  createData('2年生', 17),
  createData('3年生', 3),
  createData('4年生', 1),
  createData('修士・博士', 4),
  createData('教職員', '若干名'),
];

const MemberTable = (props: TProps) => {
  // props
  const { sx } = props;

  return (
    <TableContainer
      component={Box}
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Table sx={{ ...sx }} aria-label="member table">
        <TableHead>
          <TableRow>
            <TableCell>学年</TableCell>
            <TableCell align="right">人数</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.grade}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.grade}
              </TableCell>
              <TableCell align="right">{row.number}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MemberTable;
