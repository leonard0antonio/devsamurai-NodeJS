 let customers = [
      { id: 1, name: "John Doe", site: "example.com" },
      { id: 2, name: "Jane Smith", site: "example.org" },
      { id: 3, name: "Alice Johnson", site: "example.net" },
    ];

class CustomersController {

  // listar todos os clientes
  index(req, res) {
    return res.json(customers);
  }

  // recipera um cliente específico
  show(req, res) {
    const id = parseInt(req.params.id, 10);
    const customer = this.customers.find((item) => item.id === id);
    const status = customer ? 200 : 404;

    console.debug("GET :: /customers/:id", customer);

    return res.status(status).json(customer);
  }

  // cria um novo cliente
  create(req, res) {
    const { name, site } = req.body;
    const id = customers[customers.length - 1].id + 1;

    const newCustomer = { id, name, site };
    customers.push(newCustomer);

    return res.status(201).json(newCustomer);
  }

  update(req, res) {
    const id = parseInt(req.params.id, 10);
    const { name, site } = req.body;

    const index = customers.findIndex((item) => item.id === id);
    const status = index >= 0 ? 200 : 404;

    if (index >= 0) {
      customers[index] = { id: parseInt(id, 10), name, site };
    }

    return res.status(status).json(customers[index]);
  }

  //exclui um cliente
  destroy(req, res) {
  const id = parseInt(req.params.id, 10)
  const index = customers.findIndex(item => item.id === id);
  const status = index >= 0 ? 204 : 404;

  if (index >= 0) {
    customers.splice(index, 1);
  }

  return res.status(status).json();
  }
}

export default new CustomersController();
