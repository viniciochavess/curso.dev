import query from "@/infra/database";
import { test, expect } from "vitest";

import "dotenv/config";




test("GET to /api/v1/status should return 200", async () => {
  const result = await query("SELECT 1+1 AS result");
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);
});
