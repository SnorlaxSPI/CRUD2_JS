import client from '../controllers/client/index.js';

export default function (router) {
  const { get_controller } = client;
  router.get('/clients', get_controller);

  const { post_controller } = client;
  router.post('/clients', post_controller); 
  
  const { put_controller } = client;
  router.put('/clients/', put_controller);
  
  const { delete_controller } = client;
  router.delete('/clients/', delete_controller);

  return router;
}
