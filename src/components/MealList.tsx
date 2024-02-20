import React from 'react';
import {MealListProps} from '../types';
import MealItem from './MealItem';

const MealList: React.FC<MealListProps> = ({ meals, deleteMeal }) => {

  return (
    <div>
      <ul>
        {meals.map(meal => (
          <MealItem key={meal.id} meal={meal} onDelete={deleteMeal} />
        ))}
      </ul>
    </div>
  );
};

export default MealList;
