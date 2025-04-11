
import React from 'react';
import { Product } from '../data/products';
import { Star } from 'lucide-react';
import { Button } from './ui/button';
import { useCart } from '../context/CartContext';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  const renderRatingStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="h-4 w-4 fill-yellow-400 text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half-star" className="relative">
          <Star className="h-4 w-4 text-yellow-400" />
          <div className="absolute top-0 left-0 overflow-hidden w-1/2">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          </div>
        </div>
      );
    }

    const remainingStars = 5 - (fullStars + (hasHalfStar ? 1 : 0));
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-star-${i}`} className="h-4 w-4 text-yellow-400" />);
    }

    return stars;
  };

  return (
    <Card className="h-full flex flex-col transition-all hover:shadow-md">
      <CardHeader className="p-4 pb-0">
        <div className="aspect-square relative overflow-hidden rounded-md">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-full"
          />
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-4 pt-2">
        <div className="mt-2 text-sm text-muted-foreground">{product.category}</div>
        <h3 className="font-semibold text-lg mt-1">{product.name}</h3>
        <div className="flex items-center mt-1">
          {renderRatingStars(product.rating)}
          <span className="ml-1 text-sm text-gray-500">({product.rating})</span>
        </div>
        <p className="font-medium text-lg mt-2">${product.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={() => addToCart(product)} 
          className="w-full"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
