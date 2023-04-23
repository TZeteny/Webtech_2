import { db } from "../database";
import { v4 as uuid } from 'uuid';

export const createNewListingRoute = {
    method: 'POST',
    path: '/api/listings',
    handler: async (req, h) => {
        const id = uuid();
        const { name = '', description = '', price = 0 } = req.payload;
        const views = 0;

        await db.query(`
            INSERT INTO listings (id, name, description, price, views)
            VALUES (?, ? , ?, ?, ?);
        `,
            [id, name, description, price, views],
        );

        return {id, name, description, price, views};
    }
}