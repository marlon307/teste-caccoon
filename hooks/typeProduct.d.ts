interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: UrlObject;
  images: Array<UrlObject>
}

interface IDataProduct {
  total: number;
  skip: number;
  limit: number;
  products: Array<IProduct>
}
