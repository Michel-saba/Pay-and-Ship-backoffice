import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AddProductForm from '../../components/AddProductForm';
import AppBarMenu from '../../components/AppBar';
import ProductsTable from '../../components/ProductsTable';
import PostAddIcon from '@mui/icons-material/PostAdd';
import { data } from '../../data/data';
import Dialog from '@mui/material/Dialog';
import { Button } from '@mui/material';
import LargeProductCard from '../../components/LargeProductCard';

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    marginTop: 100,
    marginBottom: 20,
    padding: theme.spacing(4),
    textAlign: 'left',
    width: '100%',
  })
);

export default function MainPageLayout({ theme, onSignOutUser }) {
  const [dataList, setDataList] = React.useState([...data]);
  const [isAddProduct, setIsAddProduct] = React.useState(false);
  const [openCard, setOpenCard] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState({});

  const handleOpenAddProductForm = () => {
    setIsAddProduct(true);
  };
  const handleCloseAddProductForm = () => {
    setIsAddProduct(false);
  };
  const handleSaveDataAddProduct = (new_product) => {
    setDataList([...dataList, new_product]);
  };
  const handleOpenCarte = (rowData) => {
    if (rowData.row) {
      let result = dataList.find((item) => item.id === rowData.row.id);
      setSelectedItem(result);
      setOpenCard(true);
    }
  };

  const handleCloseCard = () => {
    setOpenCard(false);
    setSelectedItem({});
  };

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <AppBarMenu onSignOutUser={onSignOutUser}></AppBarMenu>

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
            data={dataList}
            open={isAddProduct}
            onClose={handleCloseAddProductForm}
            onSave={handleSaveDataAddProduct}
          ></AddProductForm>

          {dataList && (
            <ProductsTable data={dataList} handleOpenCarte={handleOpenCarte} />
          )}
        </Main>
        {selectedItem && (
          <Dialog open={openCard}>
            <LargeProductCard {...selectedItem} onClose={handleCloseCard} />
          </Dialog>
        )}
      </Box>
    </>
  );
}
