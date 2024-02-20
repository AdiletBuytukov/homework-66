export interface Meal {
  id: string;
  name: string;
  calories: number;
}

interface MealListProps {
  meals: Meal[];
  deleteMeal: (mealId: string) => void;
}