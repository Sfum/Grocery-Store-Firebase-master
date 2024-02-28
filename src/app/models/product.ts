export interface Product {
  id: any;
  productId: string,
  product_name: string,
  product_description: string,
  seqNo: number
  supplierId: number,
  categoryId: number,
  product_image: string,
  product_price: number
  quantity: number,
  in_cart: boolean
  in_wishlist: boolean
}
