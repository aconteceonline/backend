import { db } from "../db.js";

export const getUsers = (_, res) => {
    const q = "SELECT * FROM  tusers";

    db.quey(q, (err, data) => {
        if (err) return res.json(err);
        // aqui retorno todos os usuarios.
        return res.status(200).json(data);
    });
}