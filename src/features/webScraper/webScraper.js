import { useSelector, useDispatch, createRef } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './webScraper.module.css';
import { selectQuery,
  selectProductInfo,
  setQuery,
  setProductInfo } from './webScraperSlice';

function queryInput(props) {
  const onChange = (event) => {
    props.onValueChanged(String(event.target.value));
  };
  return (
    <input type={'text'} value={props.value} onChange={ onChange }/>
  );
}

queryInput.propTypes = {
  value: PropTypes.string,
  onValueChanged: PropTypes.func,
};

export const internals = {
  queryInput,
};
  
export function WebScraper() {

  const query = useSelector(selectQuery);
  const productInfo = useSelector(selectProductInfo);

  const dispatch = useDispatch();
  const onQueryChanged = (query) => dispatch(setQuery({
    query,
  }));
  const onProductInfoChanged = (productInfo) => dispatch(setProductInfo({
    productInfo,
  }));

  function connect() {

  } 

  return (
    <div className= { styles['web-scraper'] }>
      <queryInput value={ query } onValueChanged={ onQueryChanged } />
      <button onclick='connect()'>Click</button>
      <p>Query: { query }</p>
      <div>Product Info:
        <ul>
          <li>name: { productInfo['name'] }</li>
          <li>image: { productInfo['image'] }</li>
          <li>price: { productInfo['price'] }</li>
          <li>source: { productInfo['source'] }</li>
        </ul>
      </div>
    </div>
  );
};