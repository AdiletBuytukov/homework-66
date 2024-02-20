import React from 'react';
import { Meal } from '../types';

interface MealItemProps {
  meal: Meal;
  onDelete: (mealId: string) => void;
}

const MealItem: React.FC<MealItemProps> = ({ meal, onDelete }) => {
  const { id, name, calories } = meal;

  const deleteMail = () => {
    onDelete(id);
  };

  return (
    <p>
      <form>
        <p>Описание блюда: {name}</p>
        <p>Калорий: {calories}</p>
        <button onClick={deleteMail} className='btn btn-danger'>Удалить блюдо</button>
      </form>
    </p>
  );
};

export default MealItem;
