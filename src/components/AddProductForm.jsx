import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';

import nb2002 from '../images/NB-2002-Mule4.png';

export default function AddProductForm({ open, onClose, onSave, data }) {
  const handleSubmit = (event) => {
    // setShowMessage(true);
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
            <Button
              type='submit'
              color='success'
              variant='contained'
              //onClick={handleSubmit()}
            >
              Save
            </Button>
          </div>
        </Box>
      </DialogContent>
    </Dialog>
    // <Container component='main' maxWidth='xs'>
    //   {showMessage && (
    //     <Dialog onClose={handleHideMessage} open={showMessage}>
    //       <DialogTitle>product has been add successfully</DialogTitle>
    //       <DialogContent>
    //         <DialogContentText id='alert-dialog-description'>
    //           <p>product has been add successfully</p>
    //           <p>
    //             generated link :{' '}
    //             <a href='https://michel-saba.github.io/Pay-and-Ship-mockup/?p=7'>
    //               https://michel-saba.github.io/Pay-and-Ship-mockup/?p=7{' '}
    //             </a>
    //           </p>
    //         </DialogContentText>
    //       </DialogContent>
    //       <DialogActions>
    //         <Button onClick={handleHideMessage}>close</Button>
    //       </DialogActions>
    //     </Dialog>
    //   )}
    //   <Box
    //     sx={{
    //       marginTop: 8,
    //       display: 'flex',
    //       flexDirection: 'column',
    //       alignItems: 'center',
    //     }}
    //   >
    //     <Typography component='h1' variant='h5'>
    //       add new product to the list
    //     </Typography>
    //     <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
    //       <TextField
    //         margin='normal'
    //         required
    //         fullWidth
    //         id='Category'
    //         label='Category keywords'
    //         name='Category'
    //         autoFocus
    //       />
    //       <TextField
    //         required
    //         fullWidth
    //         name='Price'
    //         label='Price'
    //         type='number'
    //         id='Price'
    //       />
    //       <TextField
    //         margin='normal'
    //         required
    //         fullWidth
    //         id='Title'
    //         label='Title'
    //         name='Title'
    //       />
    //       <TextField
    //         margin='normal'
    //         fullWidth
    //         name='Description'
    //         label='Description'
    //         multiline
    //         maxRows={4}
    //       />
    //       <div>
    //         {/* <input
    //           type='file'
    //           accept='image/*'
    //           style={{ display: 'none' }}
    //           id='contained-button-file'
    //           ref={hiddenFileInput}
    //           onChange={handleChange}
    //         />

    //         <label htmlFor='contained-button-file'>
    //           <Button
    //             variant='contained'
    //             color='primary'
    //             onClick={handleUploadClick}
    //           >
    //             <span>Upload product image</span>
    //           </Button>
    //         </label> */}
    //         <IconButton
    //           color='primary'
    //           aria-label='upload picture'
    //           component='label'
    //         >
    //           <input hidden accept='image/*' type='file' />
    //           <PhotoCamera />
    //         </IconButton>
    //         <span>Upload product Photo</span>
    //       </div>
    //       <Button
    //         type='submit'
    //         fullWidth
    //         variant='contained'
    //         sx={{ mt: 3, mb: 2 }}
    //       >
    //         Add
    //       </Button>
    //     </Box>
    //   </Box>
    // </Container>
  );
}
