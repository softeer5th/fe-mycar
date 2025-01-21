export default class API{
    async get (url:string, params?:Record<string, string>){
        const param = new URLSearchParams(params);
        
        const response = await fetch(`http://localhost:5000${url}?${param.toString()}`, {
            method: "GET",
            headers : {
                contentType : "application/json"
            }
        })

        return response.json()
    }
}