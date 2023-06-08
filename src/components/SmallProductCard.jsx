import * as React from 'react';
import Card from '@mui/material/Card';
import classes from './smallProductCard.module.css';
import LargeProductCard from './LargeProductCard';
import Dialog from '@mui/material/Dialog';
const SmallProductCard = ({
  id,
  imageUrl,
  mark,
  title,
  price,
  description,
  gUrl,
}) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleCloseClick = () => {
    setExpanded(false);
  };

  return (
    <div>
      <Card className={classes.smallCard} onClick={handleExpandClick}>
        <img src={imageUrl} alt={title} className={classes.smallCardImage} />

        <div
          style={{
            paddingLeft: '10px',
          }}
        >
          {title}
        </div>
      </Card>

      <Dialog open={expanded}>
        <LargeProductCard
          id={id}
          imageUrl={imageUrl}
          mark={mark}
          title={title}
          price={price}
          description={description}
          onClose={handleCloseClick}
          gUrl={gUrl}
        />
      </Dialog>
    </div>
  );
};

export default SmallProductCard;
