import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';

export default function AddProductForm(props) {
  const [showMessage, setShowMessage] = React.useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setShowMessage(true);
    const data = new FormData(event.currentTarget);
    console.log({
      category: data.get('Category'),
      description: data.get('Description'),
    });
  };
  const handleHideMessage = () => {
    setShowMessage(false);
  };

  return (
    <Container component='main' maxWidth='xs'>
      {showMessage && (
        <Dialog onClose={handleHideMessage} open={showMessage}>
          <DialogTitle>product has been add successfully</DialogTitle>
          <DialogContent>
            <DialogContentText id='alert-dialog-description'>
              <p>product has been add successfully</p>
              <p>
                generated link :{' '}
                <a href='https://michel-saba.github.io/Pay-and-Ship-mockup/?p=2'>
                  https://michel-saba.github.io/Pay-and-Ship-mockup/?p=2{' '}
                </a>
              </p>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleHideMessage}>close</Button>
          </DialogActions>
        </Dialog>
      )}
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component='h1' variant='h5'>
          add new product to the list
        </Typography>
        <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin='normal'
            required
            fullWidth
            id='Category'
            label='Category keywords'
            name='Category'
            autoFocus
          />
          <TextField
            required
            fullWidth
            name='Price'
            label='Price'
            type='number'
            id='Price'
          />
          <TextField
            margin='normal'
            fullWidth
            name='Description'
            label='Description'
            multiline
            maxRows={4}
          />
          <div>
            {/* <input
              type='file'
              accept='image/*'
              style={{ display: 'none' }}
              id='contained-button-file'
              ref={hiddenFileInput}
              onChange={handleChange}
            />

            <label htmlFor='contained-button-file'>
              <Button
                variant='contained'
                color='primary'
                onClick={handleUploadClick}
              >
                <span>Upload product image</span>
              </Button>
            </label> */}
            <IconButton
              color='primary'
              aria-label='upload picture'
              component='label'
            >
              <input hidden accept='image/*' type='file' />
              <PhotoCamera />
            </IconButton>
            <span>Upload product Photo</span>
          </div>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
          >
            Add
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
