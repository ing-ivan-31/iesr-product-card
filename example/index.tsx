import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductImage, ProductTitle, ProductButtons  } from '../.';

const App = () => {
  const product = {
    id: '1',
    title: 'Coffee Mug - Card',
  }

  return (
    <div>
      <ProductCard product={product} initialValues = {{
        count: 0,
        maxCount: 10
      }}>
        {
          ({ reset, count, increaseBy, isMaxCountReached }) => (
            <>
              <ProductImage />
              <ProductTitle />
              <ProductButtons />
            </>
          )
        }
      </ProductCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
