import { Application, Router, send } from "https://deno.land/x/oak/mod.ts";
import { BookAll, BookSel } from './Books.js'
const router = new Router();
router
  .get("/", async (context) => {
    await send(context, context.request.url.pathname, {
      root: `${Deno.cwd()}/dist`,
      index: "index.html",
    });
  })
  .get("/book", async(ctx) => {
  const res = await BookAll();
  console.log(res.rows)
  ctx.response.boby = res.rows;
  })
  .get("/book/:id", async(ctx) => {
   if (ctx.params && ctx.params.id){
      const {id} = ctx.params;
      console.log("id : ", id)
      const res = await BookSel(id);
      console.log("res: ",res)
      ctx.response.boby = res.rows;
      }
    });



const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

// console.log(`${Deno.cwd()}`)

await app.listen({ port: 8080 });



