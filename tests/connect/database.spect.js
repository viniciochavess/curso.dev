 import { test,expect} from 'vitest';
import query from '../../infra/database';


 test('database connection', async () => {
    const result = await query('SELECT 1+1 AS result');
    expect(result.rows[0].result).toBe(2);
 });
