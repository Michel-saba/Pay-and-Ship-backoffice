import { useState } from 'react';
import { data } from '../data/data';
import SmallProductCard from './SmallProductCard';
import Button from '@mui/material/Button';

function ListOfProducts({ itemsList }) {
  return (
    <>
      {itemsList.map((item) => (
        <SmallProductCard
          key={item.id}
          id={item.id}
          mark={item.mark}
          imageUrl={item.imageUrl}
          title={item.title}
          price={item.price}
          description={item.description}
          gUrl={item.gUrl}
        />
      ))}
    </>
  );
}
/**
 * 
 * @deprecated  not used anymore
 * 
 */
export default function ProductList() {
  const [dataList, setDataList] = useState(data);

  const sortByPrice = () => {
    const list = dataList.sort((a, b) => a.price - b.price);
    setDataList([...list]); //list refere to the same array dataList
    console.log('sort');
  };

  return (
    <>
      <header style={{ textAlign: 'left', paddingBottom: '20px' }}>
        sort by: <Button onClick={sortByPrice}>price</Button>{' '}
      </header>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '10px',
          gridAutoRows: 'minmax(200px, 240px)',
          justifyContent: 'stretch',
        }}
      >
        <ListOfProducts itemsList={dataList} />
      </div>
    </>
  );
}
