db.voos.deleteMany({
  $and: [
    { "empresa.nome": "AZUL" },
    { litrosCombustivel: { $lt: 400 } },
    { litrosCombustivel: { $exists: true } },
  ],
});
