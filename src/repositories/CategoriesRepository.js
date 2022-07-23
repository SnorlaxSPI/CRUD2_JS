import Category from '../model/Category.js';

export const category = new Category();
export const categories = []

class CategoriesRepository {
  constructor() {
    this.categories = [];
  }

  create({ name, phone }) {
    const category = new Category();

    Object.assign(category, {
      name,
      phone
    })
    this.categories.push(category);
  }

  list() {
    return this.categories;
  }
}

export { CategoriesRepository };