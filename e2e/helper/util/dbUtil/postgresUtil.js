var pg = require('pg');

//connection string
//@localhost:5432
// const cs = 'postgres://postgres:xyz@localhost:5432/wxy';
// This is the PostgreSQL connection string. It is used to build a connection to the database.
var conString = "postgres://zix@qa-wzys.amazonaws.com:5432/_athar_qa_automation";
var client = new pg.Client(conString);
// A client is created. We connect to the database with connect().
client.connect();

class postgresDB {

    static async fetchQuery(query) {
        const res = await client.query(query); 
        console.log(res); //PRINT THE DB-QUERY RESPONSE
        return res;
    }

    static endConnection(){
        client.end(); // END/STOP THE PG CONNECTION
    }

    //table_ID = 122333, 23333, 333343, 44444
    static async fetchQueryTableIDDetails(table_ID) {
        const res = await client.query("select xyz_id=" + table_ID);;
        return res;
    }

    //dataValue = SH12E31, 1E1E1EE2, D2WER22
    static async fetchQueryDataNotification(dataValue) {
        const response = await client.query("select xyz_id=" + dataValue + ".wxy");
        return response;
    }

}

module.exports = postgresDB;