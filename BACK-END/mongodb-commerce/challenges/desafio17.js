db.produtos.createIndex(
  {
    descricao: "text",
  },
  {
    default_language: "pt",
  }
);
db.produtos.count({
  $text: {
    $search: "frango hambúrguer",
  },
});
