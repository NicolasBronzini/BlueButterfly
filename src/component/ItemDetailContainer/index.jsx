
import React, { useEffect,  useState} from 'react'
import ItemDetail from '../ItemDetail';


const ItemDetailContainer = () => {
   
    
    const [productDetail, setProductDetail] = useState ({});
    useEffect(()=> {
        

        const getProducts = async () => {
            try {
                const response = await  fetch ('https://Fakestoreapi.com/products/1');
                const data = await response.json();
                setProductDetail(data);
            } catch (error) {
                console.log(error);
            }
        }
        
        getProducts();

    }, [])

    console.log(productDetail);

    return(
        <>
            <ItemDetail product={productDetail}/>;
        </>
    )
}
export default ItemDetailContainer
