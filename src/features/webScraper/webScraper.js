import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './webScraper.module.css';
import { selectQuery,
  selectProductInfo,
  setQuery,
  setProductInfo } from './webScraperSlice';
import { render } from '@testing-library/react';

function QueryInput(props) {
  const onChange = (event) => {
    props.onValueChanged(String(event.target.value));
  };

  return <input className='query-input' value={ props.value } onChange={ onChange }/>;
}

QueryInput.propTypes = {
  value: PropTypes.string,
  onValueChanged: PropTypes.func,
};

export const internals = {
  QueryInput,
};
  
export function WebScraper() {

  const query = useSelector(selectQuery);
  const productInfo = useSelector(selectProductInfo);
  const products = {'name': 'Peanut butter', 'image': 'https://www.peanutbutter.com/wp-content/uploads/2019/03/SKIPPY_Product_PB_Spread_Creamy_Peanut_Butter_28oz.png', 'price': 20};

  const dispatch = useDispatch();
  const onQueryChanged = (query) => dispatch(setQuery({
    query,
  }));
  const onProductInfoChanged = (productInfo) => dispatch(setProductInfo({
    productInfo,
  }));

  function connect() {

  } 

  function displayProducts(products) {
    
  };

  return (
    <div className= { styles['web-scraper'] }>
      <QueryInput value={ query } onValueChanged={ onQueryChanged } />
      <button onclick='connect()'>Click</button>
      <p>Query: { query }</p>
      <div>Product Info:
        <ul>
          <li>name: { productInfo['name'] }</li>
          <li>image: <img className={ styles['product-image'] } src={ productInfo['image'] } alt='peanut butter' /> </li>
          <li>price: { productInfo['price'] }</li>
          <li>source: { productInfo['source'] }</li>
        </ul>
      </div>
    </div>
  );
};