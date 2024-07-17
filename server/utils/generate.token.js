import jwt from 'jsonwebtoken';

const genToken = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_KEY, {
        expiresIn: '14d',
    });//JWT KEY WORKS HERE AS A SECRET KEY FOR US, WHICH CAN HELP US IN VERIFYING THE TOKENS FURTHER

    res.cookie("jwt", token, {
        maxAge: 15 * 23 * 59 * 58 * 1000,
        httpOnly: true, //HELPS TO PREVENT XSS(CROSS-SITE-SCRIPTING) ATTACKS
        sameSite: "strict", //HELPS TO PREVENT CROSS SITE FORGERY ATTACKS [BROWSER WONNT ALLOW REQUESTS FROM ANY OTHER SITE]
    });
};

export default genToken;