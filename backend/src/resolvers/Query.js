const { forwardTo } = require('prisma-binding');
// const Query = {
//   async items(parent, args, ctx, info) {
//     const items = await ctx.db.query.items(
//       {
//         where: {
//           title: args.title
//         }
//       },
//       info
//     );
//     return items;
//   }
// };

// const Query = {
//   async items(parent, args, ctx, info) {
//     console.log('Getting Items');
//     const items = await ctx.db.query.items();
//     return items;
//   }
// };

const Query = {
  items: forwardTo('db'),
  item: forwardTo('db'),
};

module.exports = Query;
