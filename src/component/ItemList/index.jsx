
import Item from '../Item';
import './style.css';

const ItemList = ({products}) => {



  return (
    <div className='ItemCard'>
        {products.map(product => {
            return <Item key={product.id} product={product}/>
          })}
    </div>
  )
}

export default ItemList