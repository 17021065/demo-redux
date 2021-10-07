import React from "react";
/* import PropTypes from 'prop-types'; */
import CustomInput from "./Input";
import SubmitBtn from "./SubmitBtn";

const AddProductForm = () => {
  const [title, setTitle] = React.useState("");

  const handleTitleChange = e => setTitle(e.target.value);

  return <div className='w3-container w3-padding-large'>
    <form>
      <CustomInput type='text' label="Product" value={title} onChange={handleTitleChange} isBlock={false} />
      <SubmitBtn isBlock={false} color='indigo' >Thêm</SubmitBtn>
    </form>
  </div>
}

export default AddProductForm;