import * as React from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import classes from './largeProductCard.module.css';
const LargeProductCard = ({
  id,
  imageUrl,
  mark,
  title,
  price,
  description,
  gUrl,
  onClose,
}) => {
  return (
    <div>
      <Card
        style={{
          width: '100%',
          height: '100%',
          padding: '0px',
          left: '0px',
          top: '0px',
        }}
      >
        <CardHeader
          title={mark}
          action={
            <Button aria-label='settings' onClick={onClose}>
              <CloseIcon />
            </Button>
          }
        />
        <CardMedia
          component='img'
          image={imageUrl}
          alt={title}
          sx={{ maxHeight: '620px', maxWidth: '720px' }}
        />
        <CardContent>
          <Typography variant='h5' color='text.primary'>
            {title + ' ' + price + ' €'}
          </Typography>
          <Typography variant='body5' color='text.secondary'>
            {description}
          </Typography>
          <br></br>
          <Typography variant='h6' color='text.primary'>
            Generated URL:
          </Typography>
          <Typography variant='caption'> {gUrl}</Typography>
        </CardContent>
        <CardActions
          sx={{ flexDirection: 'row-reverse', paddingInlineEnd: '10%' }}
        >
          {/* <Link variant='' to={`/purchase/:${id}`}>
            <Button
              variant='outlined'
              color='primary'
              aria-label='shopping'
              endIcon={<ShoppingCartIcon sx={{ color: 'ButtonText' }} />}
            >
              <Typography variant='body2' color='text.primary'>
                Next
              </Typography>
            </Button>
          </Link> */}
        </CardActions>
      </Card>
    </div>
  );
};

export default LargeProductCard;
