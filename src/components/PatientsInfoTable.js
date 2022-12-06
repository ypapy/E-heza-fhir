import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }




export default function PatientsInfoTable(props) {
  const [rows, setRows] = React.useState([]);
  React.useEffect(() => {
    // console.log(props)

    setRows(props["patients"])
    console.log(rows)
  }, [rows])


  return (
    <TableContainer className='tablePatients' component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>Patient name</StyledTableCell>
            <StyledTableCell>View Details</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.length > 0 && rows.map((row) => (
            <StyledTableRow key={row.resource.id}>
              <StyledTableCell component="th" scope="row">
                {row.resource.name[0].family+" "+row.resource.name[0].given[0]}
              </StyledTableCell>
              <StyledTableCell> <Button href={row.fullUrl} variant="contained">View details</Button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}