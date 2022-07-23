import Category from '../model/Category.js';

function objetoNovo(data) {
  return {
    id: data.id,
    name: data.nome,
    phone: data.phone,
  }
};

export const category = new Category();
export const categories = []

class CategoriesRepository {
  constructor() {
    this.categories = [];
  }

  create({ name, phone }, objetoNovo) {
    const category = new Category();

    Object.assign(category, {
      name,
      phone
    })
    categories.push(category);

//    response.status(201).json(category);
//    //response.status(201).json({ message: `ID: ${client.id}` });
//    console.log(`ID inserido com sucesso ${category.id}`);
  }
}

export { CategoriesRepository };