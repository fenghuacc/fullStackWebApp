import client from "./db.js";

class Book{
   findAll(){
      return client.execute("SELECT title FROM book ORDER BY id LIMIT 10");
   }

   create({title}){
     return client.execute(
      `INSERT INTO book(title) VALUES (${title})`
     )
   }
}

const bookModel = new Book();

export const BookAll = async () => {
   return await bookModel.findAll();
}

export const BookSel = async (id) => {
   console.info("id: ",id)
   console.log(`SELECT title FROM book WHERE id = ${id} ORDER BY id LIMIT 10`);
   return await client.execute(`SELECT title FROM book WHERE id = ${id} ORDER BY id LIMIT 10`);
}


