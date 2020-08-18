db.air_alliances.aggregate([
  { $unwind: "$airlines" },
  {
    $lookup: {
      from: "air_routes",
      let: { route: "$airlines" },
      pipeline: [
        {
          $match: {
            airplane: { $in: ["747", "380"] },
            $expr: { $eq: ["$airline.name", "$$route"] },
          },
        },
        {
          $project: { _id: 0, route: "$$route" },
        },
      ],
      as: "routes",
    },
  },
  {
    $group: {
      _id: "$name",
      totalRotas: { $sum: { $size: "$routes" } },
    },
  },
  { $sort: { totalRotas: -1 } },
  { $limit: 1 },
]);
