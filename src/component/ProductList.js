import React from 'react';
import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';
import { getProductList } from '../redux/selectors';
import { useDispatch } from 'react-redux';

const ProductList = () => {
  
  const [action, setAction] = React.useState(1);

  const data = useSelector(getProductList);

  const dispatch = useDispatch()

  const handleCreateProduct = () => dispatch({type: 'product/create'});

  const handleSubmit = e => {
    e.preventDefault();
    setAction(action+1);
    dispatch({type: 'SUBMIT_REQUEST'});
  }

  return <div className='w3-padding-32 w3-responsive'>
    <form onSubmit={handleSubmit}>
      <table className='w3-table-all'>
        <thead>
          <tr className='w3-indigo'>
            <th style={{width: '8%'}}>ID</th>
            <th style={{width: '20%'}}>Tên</th>
            <th style={{width: '18%'}}>Định giá</th>
            <th style={{width: '42%'}}>Chi tiết</th>
            <th style={{width: '6%'}}>Sửa</th>
            <th style={{width: '6%'}}>Xóa</th>
          </tr>
        </thead>
        <tbody>
          {data.length != 0 ? 
            data.map((item, index) => <ProductItem key={index} flag={action} index={index} data={item} />) 
            : 
            <tr><td className='w3-center' colSpan='6'>Không có sản phẩm nào</td></tr>
          }
        </tbody>
      </table>
      <div className='w3-margin-top w3-right-align'>
        <button type='button' className='w3-button w3-blue' onClick={handleCreateProduct} ><b>+</b></button>
        <button type='submit' className='w3-button w3-green w3-margin-left' >Lưu</button>
      </div>
    </form>
  </div>
}

export default ProductList;