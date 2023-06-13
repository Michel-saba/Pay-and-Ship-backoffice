import * as React from 'react';
// import Box from '@mui/material/Box';
import { data } from '../data/data';
import IconButton from '@mui/material/IconButton';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import SaveIcon from '@mui/icons-material/Save';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { DataGrid } from '@mui/x-data-grid';

export default function ProductsTable({ handleOpenCarte, handleOpenLabel }) {
  const rows = data;
  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      // width: '10%'
    },
    {
      field: 'mark',
      headerName: 'Mark',
      // width: '20%',
      // editable: true,
    },
    {
      field: 'title',
      headerName: 'Item',
      //  width: '25%',
      // editable: true,
    },
    {
      field: 'price',
      headerName: 'Price',
      //  width: '25%',
      // editable: true,
      sortable: true,
    },

    {
      field: 'description',
      headerName: 'Description',
      width: 300,
      // editable: true,
    },
    {
      field: 'status',
      headerName: 'status',
      description: 'This column has a value getter and is not sortable.',
      sortable: true,
      width: 120,
    },
    {
      field: 'label',
      headerName: 'print label',
      width: 150,
      renderCell: (row) => (
        <IconButton onClick={() => handleOpenLabel()} color='inherit'>
          <OpenInNewIcon />
        </IconButton>
      ),
    },
    // {
    //   field: 'Edit',
    //   headerName: 'Edit',
    //   width: 80,
    //   renderCell: () => (
    //     <IconButton color='inherit'>
    //       <EditIcon />
    //     </IconButton>
    //   ),
    // },
    // {
    //   field: 'delete',
    //   headerName: 'Delete',
    //   width: 80,
    //   // onRowClick:()=>console.log(row),
    //   renderCell: () => (
    //     <IconButton color='inherit'>
    //       <DeleteIcon />
    //     </IconButton>
    //   ),
    // },
    // {
    //   field: 'update',
    //   headerName: 'Update',
    //   width: 80,
    //   renderCell: () => (
    //     <IconButton color='inherit'>
    //       <SaveIcon />
    //     </IconButton>
    //   ),
    // },
  ];

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      onRowDoubleClick={handleOpenCarte}
      initialState={{}}
      sx={{ height: '450px' }}
    />
  );
}
