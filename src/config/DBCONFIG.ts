import * as mysql from 'mysql';
import * as ServerInfo from './SERVERCONFIG';

export const pool = mysql.createPool({
    host: ServerInfo.hostname,
    user: ServerInfo.username,
    password: ServerInfo.password,
    database: ServerInfo.dbname,
    port: ServerInfo.port,
    connectionLimit: ServerInfo.connLimit,
    queueLimit: ServerInfo.connQueue,
    waitForConnections: true,
    multipleStatements: true
});