import React from 'react'
import productService from '../redux/features/product/productService';

export default function UserDisplay() {
    const {id} = useParams();
    const [user, setUser] = useState()

    useEffect(() => {
        const user = ;
        product?.then(data => {
            setProduct(data);
        })    
    }, [id])
  
  return (
    <>
    {/* {isLoading && <Loader />} */}
    <div className="main" id="main">
      <h1 className="add-product-header">User</h1>
      <div className='col-lg-6 col-md-12 form-container'>
      
        <div className="product-name">
          <p>Product Name: {product?.name}</p>
          <p></p>
        </div>

        <div className="product-sku">
          <p>Product SKU: {product?.sku}</p>
        </div>

        <div className="product-category">
          <p>Product Category: {product?.category}</p>
        </div>

        <div className="product-price">
          <p>Product Price: {product?.price}</p>
        </div>

        <div className="product-quantity">
          <p>Product Quantity: {product?.quantity}</p>
        </div>
        </div>
    </div>
    </>
  )
}
