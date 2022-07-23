//utilizando a factory function
import { v4 as uuidV4 } from 'uuid';

class Category {
  id;
  name;
  phone;
  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export default Category;
