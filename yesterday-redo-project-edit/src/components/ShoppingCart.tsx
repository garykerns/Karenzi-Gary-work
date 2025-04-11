
import React from 'react';
import { useCart } from '../context/CartContext';
import CartItem from './CartItem';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { ShoppingBag } from 'lucide-react';

const ShoppingCart: React.FC = () => {
  const { cartState, clearCart, getTotalItems, getTotalPrice } = useCart();
  const { items } = cartState;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Shopping Cart</CardTitle>
        {items.length > 0 && (
          <Button variant="outline" size="sm" onClick={clearCart}>
            Clear Cart
          </Button>
        )}
      </CardHeader>
      <CardContent>
        {items.length > 0 ? (
          <>
            <div className="space-y-1">
              {items.map((item) => (
                <CartItem key={item.product.id} item={item} />
              ))}
            </div>
            <div className="mt-6 space-y-2">
              <div className="flex justify-between text-sm">
                <span>Items:</span>
                <span>{getTotalItems()}</span>
              </div>
              <div className="flex justify-between font-medium text-lg">
                <span>Total:</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <ShoppingBag className="h-12 w-12 text-muted-foreground mb-2" />
            <p className="text-muted-foreground mb-1">Your cart is empty</p>
            <p className="text-xs text-muted-foreground">Add some products to get started</p>
          </div>
        )}
      </CardContent>
      {items.length > 0 && (
        <CardFooter>
          <Button className="w-full">Checkout</Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default ShoppingCart;
