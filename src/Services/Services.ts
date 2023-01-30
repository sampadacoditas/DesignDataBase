
import utility from "../utility/utility";

class Http {
    baseURL="http://192.168.2.113:3000/";
    // baseURL="http://192.168.2.182:3000/";

    // baseURL="https://jsonplaceholder.typicode.com/"

    
    async send(url: string, options = {}) {
        try {
            // console.log(options)
            const response = await fetch(`${this.baseURL}${url}`, options);
            // console.log(response)
            const data = await response.json();
            // console.log(data)
            // console.log(data.data.token)
            if (!response.ok)
            {
                throw data.error;
            }
            return data;
        }
        catch(e:any) {
            // eslint-disable-next-line no-throw-literal
            console.log(e)
            console.log(e.message)
            return e.message;
        }
    }
    get(url:string) {
        return this.send(url, {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
            'Authorization': utility.getStore("token"),
        },
        });
      }
    post(url: string, data: {}) {
        console.log(utility.getStore("token"))
        return this.send(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': utility.getStore("token"),
            },
            body: JSON.stringify(data)
        })
    }
    put(url:string,data:{}){
        return this.send(url,{
            method:"PUT",
            headers:{
                "Content-Type": "application/json",
                'Authorization':  utility.getStore("token") ,
            },
            body:JSON.stringify(data),
        })
    }
    delete(url: string) {
        return this.send(url, {
            method:"Delete",
            headers:{
                "Content-Type": "application/json",
                'Authorization':  utility.getStore("token") ,
            },
        })
    }
   
}
const http = new Http();
export default http;

