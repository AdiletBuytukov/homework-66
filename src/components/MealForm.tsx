import React, {useState} from 'react';
import {Meal} from '../types';

interface AddMealFormProps {
  addMeal: (meal: Meal) => void;
}

const MealForm: React.FC<AddMealFormProps> = ({addMeal}) => {
  const [description, setDescription] = useState('');
  const [calories, setCalories] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newMeal: Meal = {
      id: '',
      name: description,
      calories: parseInt(calories),
    };
    addMeal(newMeal);
    setDescription('');
    setCalories('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-5">
      <h2>Добавить новое блюдо:</h2>
      <div className='mb-3 mt-3'>
        <h4>Описание блюда</h4>
        <input type="text" value={description} onChange={e => setDescription(e.target.value)}/>
      </div>
      <div className='mb-3'>
        <h4>Калорийность</h4>
        <input type="number" value={calories} onChange={e => setCalories(e.target.value)}/>
      </div>
      <button type="submit" className="btn btn-primary">Добавить</button>
    </form>
  );
};

export default MealForm;
