import {useEffect, useState} from 'react';
import axiosApi from './axiosApi';
import MealList from './components/MealList';
import {Meal} from './types';
import MealForm from './components/./MealForm';

function App() {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [totalCalories, setTotalCalories] = useState<number>(0);
  const [showAddForm, setShowAddForm] = useState<boolean>(false);

  useEffect(() => {
    fetchMeals();
  }, []);

  const fetchMeals = async () => {
    try {
      const response = await axiosApi.get('/meals.json');
      if (response.data) {
        const mealsData: Meal[] = Object.keys(response.data).map(key => ({
          id: key,
          ...response.data[key],
        }));
        setMeals(mealsData);
        calculateTotalCalories(mealsData);
      }
    } catch (error) {
      console.error('Error fetching meals:', error);
    }
  };

  const calculateTotalCalories = (mealsData: Meal[]) => {
    const total = mealsData.reduce((acc, meal) => acc + meal.calories, 0);
    setTotalCalories(total);
  };

  const addMeal = async (meal: Meal) => {
    try {
      await axiosApi.post('/meals.json', meal);
      fetchMeals();
      setShowAddForm(false);
    } catch (error) {
      console.error('Error', error);
    }
  };

  const deleteMeal = async (mealId: string) => {
    try {
      await axiosApi.delete(`/meals/${mealId}.json`);
      fetchMeals();
    } catch (error) {
      console.error('Error deleting meal:', error);
    }
  };

  return (
    <div>
      <div className='d-flex mb-5 border-bottom'><h2>Подсчет калорий</h2></div>
      <div className='d-flex flex-row justify-content-between mb-5'>
        <p>Total calories: {totalCalories} kcal</p>
        <button className='btn btn-success' onClick={() => setShowAddForm(true)}>Add new meal</button>
      </div>
      {showAddForm && <MealForm addMeal={addMeal} />}
      <h4 >Список блюд:</h4>
      <MealList meals={meals} deleteMeal={deleteMeal} />
    </div>
  );
}

export default App;
