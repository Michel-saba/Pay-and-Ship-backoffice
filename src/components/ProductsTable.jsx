import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { DataGrid } from '@mui/x-data-grid';
import labelExample from '../images/label_example.png';

export default function ProductsTable({
  handleOpenCarte,
  handleOpenLabel,
  data,
}) {
  const printLabel = () => {
    const my_window = window.open(labelExample, 'delivery label');
    my_window.print();
  };
  const rows = data;
  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      // width: '10%'
    },
    {
      field: 'mark',
      headerName: 'Brand',
      // width: '20%',
      // editable: true,
    },
    {
      field: 'SKU',
      headerName: 'SKU',
      // width: '20%',
      // editable: true,
    },
    {
      field: 'title',
      headerName: 'Item',
      width: 160,
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
        <IconButton
          // onClick={() => handleOpenLabel()}
          onClick={() => printLabel()}
          color='inherit'
        >
          <OpenInNewIcon />
        </IconButton>
      ),
    },
  ];

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      onRowDoubleClick={handleOpenCarte}

      // sx={{ height: '60%' }}
    />
  );
}

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
