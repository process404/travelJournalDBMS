// import { app, ipcMain } from "electron";
// import path from "path";
// const ADODB = (await import("node-adodb")).default;

// app.whenReady().then(() => {
//   const isDev = !app.isPackaged;
//   const dbPath = isDev
//     ? path.join(app.getAppPath(), "src-renderer", "db", "experiment.mdb")
//     : path.join(process.resourcesPath, "db", "experiment.mdb");

//   console.log("DB Path resolved to:", dbPath);

//   const connection = ADODB.open(
//     `Provider=Microsoft.Jet.OLEDB.4.0;Data Source=${dbPath};`
//   );

//   ipcMain.handle("db:query", async (_event, sql: string) => {
//     try {
//       return await connection.query(sql);
//     } catch (err) {
//       console.error("DB query error:", err);
//       throw err;
//     }
//   });

//   ipcMain.handle("db:execute", async (_event, sql: string) => {
//     try {
//       return await connection.execute(sql);
//     } catch (err) {
//       console.error("DB exec error:", err);
//       throw err;
//     }
//   });
// });
