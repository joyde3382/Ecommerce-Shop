import React, { Suspense } from 'react';

import Cart from '../components/cart/cart';
import Navbar from '../components/navbar/navbar';
import Products from './products';

export default function Home() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Products />
      </Suspense>
    </div>
  )
}