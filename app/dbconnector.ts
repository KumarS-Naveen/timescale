import Knex from "knex";

class DBConnector {
    dbConnector: Knex;
    constructor() {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED='0'
        // Checks to where the connection should be done. If in loco then a sqlite db should be used insteade Postgresql
        this.dbConnector = Knex( {
            client: "postgres",
            connection: {
                host: "tsdb-326d8e86-siemens-67e8.a.timescaledb.io",
                user: "tsdbadmin",
                password: "h44pioh7j8sm9lv0",
                database: "timeseriestesting",
                port: 10744,
                ssl: true,
                
            }
        } );
      }

      async init() {
         await this.createTables();
      //   console.log(new Date());
        
      //  const data  = await this.dbConnector.select("*")
      //     .from("TimeTest")
      //     console.log(data.length);
          
      //     console.log(new Date());
        for(let i=0;i<10000;i++){
            await this.dbConnector.insert({ value:  "clientID", time:  new Date()}).into("TimeTest").returning("*");
            console.log("hi"+new Date())
        }
        
      }

        async createTables(){
return this.dbConnector.schema.createTable("TimeTest", function (table) {
    table.string("value").notNullable();
    table.dateTime("time").notNullable();
    table.string("Identifier").unique();
  })
      }

 

}


const db = new DBConnector();
export default db;