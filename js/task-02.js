// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().
// =================================================================================================
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

let ulList = document.getElementById('ingredients');
const foodIngredients = ingredients.forEach(ingredient => {
  let items = document.createElement('li');
  items.innerHTML = ingredient;
  ulList.append(items);
  items.setAttribute('style', 'list-style-type:circle; margin-left:40px');
});

console.log(ulList);
