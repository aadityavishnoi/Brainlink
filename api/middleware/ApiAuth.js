export default function ApiAuth(){
    const apiKey = req.headers["x-api-key"];

    if(!apiKey || apiKey !== process.env.API_SECRET_KEY){
        res.status(401).json({
            error: "Unauthorized API Access."
        });
        return false;
    }
    return true;
}