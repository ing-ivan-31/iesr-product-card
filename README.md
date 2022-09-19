# Este es un paquete de pruebas de deploy to NPM

#### Ivan Sanchez

```
import {ProductCard, ProductImage, ProductTitle, ProductButtons } from 'iesr-product-card'
```

```
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
```


