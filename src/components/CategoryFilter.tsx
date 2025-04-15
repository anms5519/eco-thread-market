
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Filter } from 'lucide-react';
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

interface FilterOption {
  id: string;
  label: string;
}

interface FilterCategory {
  name: string;
  options: FilterOption[];
}

interface CategoryFilterProps {
  categories: FilterCategory[];
  onFilterChange: (category: string, optionId: string, checked: boolean) => void;
}

const CategoryFilter = ({ categories, onFilterChange }: CategoryFilterProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<string[]>(categories.map(cat => cat.name));
  
  const toggleExpanded = () => setIsExpanded(!isExpanded);
  
  const toggleCategory = (categoryName: string) => {
    setExpandedCategories(prev => {
      if (prev.includes(categoryName)) {
        return prev.filter(name => name !== categoryName);
      } else {
        return [...prev, categoryName];
      }
    });
  };
  
  const handleCheckboxChange = (category: string, optionId: string, checked: boolean) => {
    onFilterChange(category, optionId, checked);
  };

  return (
    <div className="bg-white dark:bg-card rounded-lg p-4 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Filter className="h-5 w-5 text-eco-primary" />
          <h3 className="font-medium">Filter Products</h3>
        </div>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleExpanded}
          className="md:hidden text-eco-primary"
        >
          {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </Button>
      </div>
      
      <div className={`space-y-4 ${!isExpanded && 'hidden md:block'}`}>
        {categories.map((category, index) => (
          <div key={category.name} className="space-y-2">
            <div 
              className="flex items-center justify-between cursor-pointer" 
              onClick={() => toggleCategory(category.name)}
            >
              <h4 className="font-medium text-sm text-eco-dark">{category.name}</h4>
              {expandedCategories.includes(category.name) ? 
                <ChevronUp className="h-4 w-4 text-eco-gray" /> : 
                <ChevronDown className="h-4 w-4 text-eco-gray" />
              }
            </div>
            
            {expandedCategories.includes(category.name) && (
              <div className="pl-1 space-y-1">
                {category.options.map(option => (
                  <div key={option.id} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`${category.name}-${option.id}`} 
                      className="text-eco-primary data-[state=checked]:bg-eco-primary data-[state=checked]:border-eco-primary"
                      onCheckedChange={(checked) => 
                        handleCheckboxChange(category.name, option.id, checked as boolean)
                      }
                    />
                    <Label 
                      htmlFor={`${category.name}-${option.id}`}
                      className="text-sm font-normal cursor-pointer"
                    >
                      {option.label}
                    </Label>
                  </div>
                ))}
              </div>
            )}
            
            {index < categories.length - 1 && <Separator className="my-2" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
