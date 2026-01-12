//GET /api/policy/search?username=John

router.get("/search", async (req, res) => {
  const user = await User.findOne({ firstName: req.query.username });
  const policies = await Policy.find({ userId: user._id })
    .populate("categoryId carrierId agentId");

  res.json(policies);
});
