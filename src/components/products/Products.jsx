import React, { useState } from 'react';
import "./Products.css";

const Products = ({ data }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleImageClick = (product) => {
    setSelectedProduct(product);
    setModalVisible(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedProduct(null);
    document.body.style.overflow = 'auto'; 
  };

  const handleOutsideClick = (e) => {
    if (e.target.className === 'modal') {
      handleCloseModal();
    }
  };

  let productItems = data?.map(el => (
    <div key={el.id} className="card">
      <img src={el.images[0]} alt="" onClick={() => handleImageClick(el)} />
      <h3 className='title'>{el.title}</h3>
      <p><strong>Price:</strong> ${el.price}</p>
    </div>
  ));

  return (
    <div>
      <div className="wrapper">
        {productItems}
      </div>
      {modalVisible && selectedProduct && (
        <div className="modal" style={{ display: modalVisible ? 'flex' : 'none' }} onClick={handleOutsideClick}>
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <img src={selectedProduct.images[0]} alt="" />
            <h2>{selectedProduct.title}</h2>
            <p>{selectedProduct.description}</p>
            <p><strong>Price:</strong> ${selectedProduct.price}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
