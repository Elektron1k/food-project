import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
function MealPage() {
  const { id } = useParams();

  return <div>{id}</div>;
}

export default MealPage;
