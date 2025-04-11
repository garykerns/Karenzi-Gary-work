
import React from 'react';
import { Checkbox } from './ui/checkbox';
import { Slider } from './ui/slider';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from './ui/card';

export type FilterOptions = {
  categories: string[];
  priceRange: [number, number];
  minRating: number;
};

type FilterPanelProps = {
  categories: string[];
  maxPrice: number;
  selectedFilters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
  onClearFilters: () => void;
};

const FilterPanel: React.FC<FilterPanelProps> = ({
  categories,
  maxPrice,
  selectedFilters,
  onFilterChange,
  onClearFilters,
}) => {
  const handleCategoryChange = (category: string, checked: boolean) => {
    const updatedCategories = checked
      ? [...selectedFilters.categories, category]
      : selectedFilters.categories.filter((c) => c !== category);
    
    onFilterChange({
      ...selectedFilters,
      categories: updatedCategories,
    });
  };

  const handlePriceChange = (value: number[]) => {
    onFilterChange({
      ...selectedFilters,
      priceRange: [value[0], selectedFilters.priceRange[1]],
    });
  };

  const handleMaxPriceChange = (value: number[]) => {
    onFilterChange({
      ...selectedFilters,
      priceRange: [selectedFilters.priceRange[0], value[0]],
    });
  };

  const handleRatingChange = (value: number[]) => {
    onFilterChange({
      ...selectedFilters,
      minRating: value[0],
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Filters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="font-medium">Categories</h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <div key={category} className="flex items-center space-x-2">
                <Checkbox
                  id={`category-${category}`}
                  checked={selectedFilters.categories.includes(category)}
                  onCheckedChange={(checked) => 
                    handleCategoryChange(category, checked === true)
                  }
                />
                <Label
                  htmlFor={`category-${category}`}
                  className="cursor-pointer"
                >
                  {category}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-medium">Price Range</h3>
          <div className="px-2">
            <div className="flex items-center justify-between mb-2">
              <Label htmlFor="min-price">Min: ${selectedFilters.priceRange[0].toFixed(2)}</Label>
              <Label htmlFor="max-price">Max: ${selectedFilters.priceRange[1].toFixed(2)}</Label>
            </div>
            <div className="py-4">
              <Label htmlFor="min-price" className="mb-1 block">Minimum Price</Label>
              <Slider
                id="min-price"
                min={0}
                max={maxPrice}
                step={1}
                value={[selectedFilters.priceRange[0]]}
                onValueChange={handlePriceChange}
                className="mb-4"
              />
              
              <Label htmlFor="max-price" className="mb-1 block">Maximum Price</Label>
              <Slider
                id="max-price"
                min={0}
                max={maxPrice}
                step={1}
                value={[selectedFilters.priceRange[1]]}
                onValueChange={handleMaxPriceChange}
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-medium">Minimum Rating</h3>
          <div className="px-2">
            <div className="flex items-center justify-between mb-2">
              <span>{selectedFilters.minRating.toFixed(1)} Stars</span>
            </div>
            <Slider
              min={0}
              max={5}
              step={0.5}
              value={[selectedFilters.minRating]}
              onValueChange={handleRatingChange}
            />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          variant="outline" 
          onClick={onClearFilters}
          className="w-full"
        >
          Clear Filters
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FilterPanel;
