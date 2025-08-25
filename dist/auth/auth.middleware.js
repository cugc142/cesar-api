"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireAuth = requireAuth;
const jwt_utils_1 = require("./jwt.utils");
function requireAuth(req, res, next) {
    const h = req.headers.authorization;
    if (!h?.startsWith('Bearer '))
        return res.status(401).json({ message: 'Token requerido' });
    try {
        req.user = (0, jwt_utils_1.verifyJwt)(h.slice(7));
        next();
    }
    catch {
        res.status(401).json({ message: 'Token inválido' });
    }
}
