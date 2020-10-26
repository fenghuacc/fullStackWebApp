import { Client } from "https://deno.land/x/mysql/mod.ts";

const client = await new Client().connect({
  hostname: "127.0.0.1",
  port: 80,
  username: "root",
  db: "yz",
  poolSize: 3,
  password: "Meinv110.",
});

await client.execute(`CREATE DATABASE IF NOT EXISTS yz`);
await client.execute(`USE yz`);
/*await client.execute(`CREATE DATABASE IF NOT EXISTS yz`);

await client.execute(`DROP TABLE IF EXISTS web`);
await client.execute(`
    CREATE TABLE web (
        id int NOT NULL AUTO_INCREMENT,
        title varchar(20),
        created_at timestamp not null default current_timestamp,
        PRIMARY KEY (id)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
`);

let result = await client.execute(`INSERT INTO web(title) values(?)`, [
  "哈利波特",
]);
console.log(result);
*/
//await run();
//const res = await client.execute(`SELECT * from book`);
//console.log(res.rows, "@@@@")
export default client;
