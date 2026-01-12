router.get("/aggregate", async (req, res) => {
  const data = await Policy.aggregate([
    {
      $group: {
        _id: "$userId",
        totalPolicies: { $sum: 1 }
      }
    }
  ]);

  res.json(data);
});
