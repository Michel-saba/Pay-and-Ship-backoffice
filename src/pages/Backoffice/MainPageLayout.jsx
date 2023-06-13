import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
import AddProductForm from '../../components/AddProductForm';
//import ProductList from '../../components/ListProducts';
import AppBarMenu from '../../components/AppBar';
import ProductsTable from '../../components/ProductsTable';
import PostAddIcon from '@mui/icons-material/PostAdd';

// import LargeProductCard from '../../components/LargeProductCard';
import { data } from '../../data/data';
import Dialog from '@mui/material/Dialog';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import labelExample from '../../images/label_example.png';
import LargeProductCard from '../../components/LargeProductCard';
import Footer from '../../components/Footer';
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    marginTop: 100,
    marginBottom: 20,
    padding: theme.spacing(4),
    textAlign: 'left',
  })
);

export default function MainPageLayout({ theme }) {
  const [isAddProduct, setIsAddProduct] = React.useState(false);
  const [openCard, setOpenCard] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState({});
  const [openLabel, setOpenLabel] = React.useState(false);
  const handleOpenAddProductForm = () => {
    setIsAddProduct(true);
    // console.log('open');
  };
  const handleCloseAddProductForm = (new_product) => {
    if (new_product) {
    }
    setIsAddProduct(false);
  };
  const handleOpenCarte = (rowData) => {
    if (rowData.row) {
      let result = data.find((item) => item.id === rowData.row.id);
      setSelectedItem(result);
      setOpenCard(true);
    }
  };
  const handleOpenLabel = () => {
    setOpenLabel(true);
  };
  const handleCloseLabel = () => {
    setOpenLabel(false);
    console.log('close');
  };
  const handleCloseCard = () => {
    setOpenCard(false);
    setSelectedItem({});
  };

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <AppBarMenu></AppBarMenu>

        <Main>
          <Button
            variant='contained'
            sx={{ marginBottom: '40px' }}
            color='error'
            startIcon={<PostAddIcon />}
            onClick={handleOpenAddProductForm}
          >
            Add new Product
          </Button>
          <AddProductForm
            open={isAddProduct}
            onClose={handleCloseAddProductForm}
          ></AddProductForm>
          {/* {isProductList && <ProductList />}  */}
          <ProductsTable
            handleOpenCarte={handleOpenCarte}
            handleOpenLabel={handleOpenLabel}
          />
        </Main>
        {selectedItem && (
          <Dialog open={openCard}>
            <LargeProductCard {...selectedItem} onClose={handleCloseCard} />
          </Dialog>
        )}
        <Dialog open={openLabel}>
          <Card>
            <CardActionArea>
              <CardMedia
                component='img'
                image={labelExample}
                alt='delivery label'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  Delivery label example
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size='small'
                color='error'
                variant='contained'
                onClick={handleCloseLabel}
              >
                close
              </Button>
              <Button size='small' color='error' variant='contained'>
                Print
              </Button>
            </CardActions>
          </Card>
        </Dialog>
      </Box>
      <Footer />
    </>
  );
}
