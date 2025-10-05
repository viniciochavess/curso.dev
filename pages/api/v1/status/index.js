import query from "@/infra/database";
async function getStatus(req, res) {
    const result = await query("SELECT 1+1 AS result");
    res.status(200).json({ status: 'ok', result: result.rows[0].result });
}

export default getStatus;
