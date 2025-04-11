
import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';
import { useCart } from '../context/CartContext';

type NavbarProps = {
  toggleCart: () => void;
};

const Navbar: React.FC<NavbarProps> = ({ toggleCart }) => {
  const { getTotalItems } = useCart();
  const itemCount = getTotalItems();

  return (
    <header className="sticky top-0 z-10 bg-background border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-xl font-bold">ShopCatalog</h1>
        </div>
        <Button 
          variant="ghost" 
          onClick={toggleCart} 
          className="relative"
        >
          <ShoppingCart className="h-5 w-5" />
          {itemCount > 0 && (
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-white">
              {itemCount}
            </span>
          )}
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
