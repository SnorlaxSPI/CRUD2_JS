import Category from '../../model/Category.js'
import { CategoriesRepository } from '../../repositories/CategoriesRepository.js';

// Apenas usado em typescript
//const clients: Category[] = [];

export function objetoNovo(data) {
  return {
    id: data.id,
    name: data.name,
    phone: data.phone,
  }
};

const categoriesRepository = new CategoriesRepository();
const category = new Category();

const clients = [];


export default {
  post_controller (request,response) {
    // request.body => quer o corpo da requisição
    const { name, phone } = objetoNovo(request.body);
    //const { name, phone } = request.body;

    categoriesRepository.create({ name, phone });
  
    response.status(201).json(categoriesRepository);
//    //response.status(201).json({ message: `ID: ${client.id}` });
    console.log(`ID inserido com sucesso ${category.id}`);
},

  get_controller(request,response) {  
    const allList = categoriesRepository.list();
    response.status(200).json(allList);
  },

  delete_controller(request,response) {

    const { id } = request.body;
    //console.log(request.body);
  
    for(let client of clients) {
      const index = clients.indexOf(client.id);
      clients.splice(index, 1)
    }
  
    response.status(204).send();
    console.log(`ID ${category.id} removido com sucesso`);
  },

  put_controller(request,response) {
    //const id = request.params.id;
    const { id } = request.body;
    const nome = request.body.name;
  
    let client = clients.find(value => value.id == id);
    
    if(client == undefined) {
      response.status(400).send();
    } else {
      client.name = nome;
  
      response.status(200).json(client);
    }
  }
}