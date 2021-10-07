import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

const ProductItem = ({data, index, flag}) => {
  const {id, name, price, detail, isUpdate, isNew, isDelete} = data;

  const [newId, setId] = React.useState(id);

  const [newName, setName] = React.useState(name);

  const [newPrice, setPrice] = React.useState(price);

  const [newDetail, setDetail] = React.useState(detail);

  const dispatch = useDispatch()

  const handleIdChange = e => setId(e.target.value);

  const handleNameChange = e => setName(e.target.value);

  const handlePriceChange = e => setPrice(Number(e.target.value).toString());

  const handleDetailChange = e => setDetail(e.target.value);

  const handleDeleteRow = () => dispatch({type: 'product/delete', payload: index});

  const handleRollback = () => dispatch({type: 'product/rollback', payload: index});

  const handleEdit = () => dispatch({type: 'product/update', payload: index});

  React.useEffect(() => {
    if(flag>0) {
      dispatch({type: 'product/saveChange', payload: {
        index: index,
        data: {
          isNew: isNew,
          isUpdate: isUpdate,
          isDelete: isDelete,
          id: newId,
          name: newName,
          price: newPrice,
          detail: newDetail,
        }
      }});
    }
  }, [flag])

  React.useEffect(() => {
    setId(id);
    setName(name);
    setPrice(price);
    setDetail(detail);
  },[id, name, price, detail]);

  return <>{!isDelete ? 
    (!isNew ?
      (!isUpdate ? 
        <tr>
          <td>{id}</td>
          <td>{name}</td>
          <td>{price}</td>
          <td>{detail}</td>
          <td><button type='button' className='w3-block w3-button w3-border w3-pale-blue' onClick={handleEdit} >E</button></td>
          <td><button type='button' className='w3-block w3-button w3-border w3-pale-red' onClick={handleDeleteRow} >D</button></td>
        </tr> 
      :
        <tr>
          <td><input type="text" value={newId} onChange={handleIdChange} autoFocus required/></td>
          <td><input type="text" value={newName} onChange={handleNameChange} required/></td>
          <td><input type="number" min='0' value={newPrice} onChange={handlePriceChange} required/></td>
          <td><input type="text" value={newDetail} onChange={handleDetailChange} required/></td>
          <td><button type='button' className='w3-block w3-button w3-border w3-pale-blue' onClick={handleRollback} >C</button></td>
          <td><button type='button' className='w3-block w3-button w3-border w3-pale-red' onClick={handleDeleteRow} >D</button></td>
        </tr>
      )
    :
      <tr>
        <td><input type="text" value={newId} onChange={handleIdChange} autoFocus required/></td>
        <td><input type="text" value={newName} onChange={handleNameChange} required/></td>
        <td><input type="number" min='0' value={newPrice} onChange={handlePriceChange} required/></td>
        <td><input type="text" value={newDetail} onChange={handleDetailChange} required/></td>
        <td><button type='button' className='w3-block w3-button w3-border w3-pale-blue' disabled >E</button></td>
        <td><button type='button' className='w3-block w3-button w3-border w3-pale-red' onClick={handleDeleteRow} >D</button></td>
      </tr>
    )
    :
    <tr>
      <td colSpan='4'></td>
      <td colSpan='2'><button type='button' className='w3-block w3-button w3-border w3-pale-yellow' onClick={handleRollback} >Hủy xóa</button></td>
    </tr>
  }</>
}

ProductItem.propTypes = {
  index: PropTypes.number,
  flag: PropTypes.number,
  data: PropTypes.object,
}

export default ProductItem;
