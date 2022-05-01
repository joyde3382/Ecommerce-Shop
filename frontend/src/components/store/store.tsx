import { atom, selector } from "recoil";
import { IProduct, IProductList } from "../../pages/products/Interfaces/Iproduct";

const product: IProduct = {
  breadcrumbs: [{
    id: 0,
    name: "tmp",
    href: "#"
  }],
  images: [{
    src: "img/placeholder-image.png",
    alt: "temp"
  }
  ],
  description: "No description found",
  price: 1337,
  count: 0,
  inCart: false,
  category: "undefined",
  color: "black",
  name: "tmpName",
  slug: 'tmpSlug',
  href: "#",
  createdAt: undefined,
  updatedAt: undefined,
  publishedAt: undefined,
  id: 0
}

export const cartState = atom({
    key: "cartState",
    default: false, 
  });

  
export const navbarState = atom({
    key: "navbarState",
    default: false, 
  });

export const currentProductState = atom({
    key: "currentProductState",
    default: product as IProduct, 
});


export const productListState = atom({
    key: "productListState",
    default: {} as IProductList, 
});

export const productListQuery = selector({
    key: "productListQuery", // diff `key` per selector
    get: async ({get}) => {
      
      const response = await fetch("http://localhost:1337/api/products");
      var products = await response.json() as IProductList;
      return products;
    },
  });

  

//   export const infoValue = selector({
//     key: "infoValue",
//     get: ({ get }) => ({
//       total: get(cartState).length,
//       completed: get(cartState).filter((todo) => todo.completed).length,
//       notCompleted: get(cartState).filter((todo) => !todo.completed).length,
//     }),
//   });