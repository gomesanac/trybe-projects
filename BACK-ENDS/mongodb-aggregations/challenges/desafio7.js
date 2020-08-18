db.movies.aggregate([
  {
    $match: {
      languages: { $exists: true },
      languages: { $all: ["English"] },
    },
  },
  { $unwind: "$cast" },
  {
    $group: {
      _id: "$cast",
      numFilmes: { $sum: 1 },
      medIMDB: { $avg: "$imdb.rating" },
    },
  },
  {
    $project: {
      numeroFilmes: "$numFilmes",
      mediaIMDB: { $round: ["$medIMDB", 1] },
    },
  },
  {
    $sort: {
      numeroFilmes: -1,
      _id: -1,
    },
  },
]);
