import { data } from '../data/data';
import SmallProductCard from './SmallProductCard';

export default function ProductList() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '10px',
        gridAutoRows: 'minmax(200px, 240px)',
        justifyContent: 'stretch',
      }}
    >
      {data.map((item) => (
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
    </div>
  );
}
