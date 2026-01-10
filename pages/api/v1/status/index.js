import database from "infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString();

  try {
    const [
      databaseVersionResult,
      databaseMaxConnectionsResult,
      databaseOpenedConnectionsResult,
    ] = await Promise.all([
      database.query("SHOW server_version;"),
      database.query("SHOW max_connections;"),
      database.query({
        text: "SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1;",
        values: [process.env.POSTGRES_DB],
      }),
    ]);

    const databaseVersionValue = databaseVersionResult.rows[0].server_version;

    const databaseMaxConnectionsValue = parseInt(
      databaseMaxConnectionsResult.rows[0].max_connections,
    );

    const databaseOpenedConnectionsValue =
      databaseOpenedConnectionsResult.rows[0].count;

    response.status(200).json({
      updated_at: updatedAt,
      dependencies: {
        database: {
          version: databaseVersionValue,
          max_connections: databaseMaxConnectionsValue,
          opened_connections: databaseOpenedConnectionsValue,
        },
      },
    });
  } catch (error) {
    console.error("Database query failed:", error);
    response.status(500).json({
      error: "Failed to retrieve database status",
    });
  }
}

export default status;
