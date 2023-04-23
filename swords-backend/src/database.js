import mysql, { escape } from 'mysql';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'hapi-server',
    //password: Asdfg1234
    //Workbench wants one with mixed case letters, numbers and 8 chars min.
    password: 'Asdfg1234',
    database: 'swords'
});

export const db = {
    connect: () => connection.connect(),
    query: (querySrtring, escapedValues) =>
    new Promise((resolve, reject) => {
        connection.query(querySrtring, escapedValues, (error, results, fields) =>{
            if (error) reject(error);
            resolve({ results, fields });
        })
    }),
    end: () => connection.end(),
}