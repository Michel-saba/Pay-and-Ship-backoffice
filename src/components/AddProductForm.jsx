import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import nb2002 from '../images/NB-2002-Mule4.png';

export default function AddProductForm({ open, onClose, onSave, data }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const dataForm = new FormData(event.currentTarget);
    const new_product = {
      type: dataForm.get('brand'),
      gUrl: `https://michel-saba.github.io/Pay-and-Ship-mockup/?p=7`,
      id: data.length + 1,
      mark: dataForm.get('brand'),
      imageUrl: nb2002,
      SKU: dataForm.get('SKU'),
      title: dataForm.get('item'),
      price: dataForm.get('Price'),
      description: dataForm.get('Description'),
      status: 'available',
    };

    onSave(new_product);
    onClose();
  };

  return (
    <Dialog open={open}>
      <DialogTitle> add new product to the list</DialogTitle>
      <DialogContent>
        <Box
          component='form'
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 1, p: 1 }}
        >
          <TextField
            margin='normal'
            required
            fullWidth
            id='brand'
            label='Brand'
            name='brand'
            autoFocus
          />
          <TextField
            margin='normal'
            required
            fullWidth
            name='SKU'
            label='SKU'
            type='number'
            id='SKU'
          />
          <TextField
            margin='normal'
            required
            fullWidth
            name='Price'
            label='Price'
            type='number'
            id='Price'
          />
          <TextField
            margin='normal'
            required
            fullWidth
            label='Item'
            name='item'
          />
          <TextField
            margin='normal'
            fullWidth
            name='Description'
            label='Description'
            multiline
            maxRows={4}
          />
          <IconButton
            color='primary'
            aria-label='upload picture'
            component='label'
          >
            <input hidden accept='image/*' type='file' />
            <PhotoCamera />
          </IconButton>
          <span>Upload product Photo</span>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button variant='contained' color='error' onClick={onClose}>
              Close
            </Button>
            <Button type='submit' color='success' variant='contained'>
              Save
            </Button>
          </div>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
