const Query = {
  async items(parent, args, ctx, info) {
    // const items = await ctx.db.query.items();
    const items = await ctx.db.query.items(
      {
        where: {
          title: args.title
        }
      },
      info
    );
    return items;
  }
};

module.exports = Query;
