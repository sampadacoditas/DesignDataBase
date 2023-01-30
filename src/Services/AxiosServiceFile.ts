import axios from "axios";
// export const server = axios.create({ baseURL: "http://localhost:8080" });
export const server = axios.create({ baseURL: "http://192.168.2.169:8080" });
server.interceptors.request.use(
	async (config) => {
		if (localStorage.getItem("token")) {
			const value: any = localStorage.getItem("token");
			console.log(value);
			const keys = JSON.parse(value);
			config.headers = {
				Authorization: `${keys.access_token}`,
				Accept: "application/json",
				"Content-Type": "application/json",
			};
		}
		return config;
	},
	(error) => {
		Promise.reject(error);
	}
);

server.interceptors.response.use(
	(response) => {
		return response;
	},
	async (error) => {
		console.log(error);
		const originalRequest = error.config;
		if (error.response.status == 403) {
			originalRequest._retry = true;
			const res = await getNewAccessToken();
			localStorage.setItem("token", JSON.stringify(res.data));
			const value: any = localStorage.getItem("token");
			const data = JSON.parse(value);
			console.log(data.access_token);
			return res;
		}
	}
);

export const login = async (data: any) => {
	console.log(data);
	// const res = await axios.post("http://localhost:8080/auth/login", data);
	// const res = await axios.post("http://192.168.2.169:8080/auth/login", data);
	const res=await axios.post("http://192.168.2.197:3000/auth/login",data)
	// const res = await server.post("/auth/login", data);
	console.log(res);
	return res;
};
export const checkToken = async () => {
	const res = await server.get("/auth/check");
	console.log(res);
	return res;
};
export const getNewAccessToken = async () => {
	const string: any = localStorage.getItem("token");
	const data = {
		refresh_token: JSON.parse(string).refresh_token,
	};
	const res = await server.post("/auth/token", data);
	console.log(res);
	return res;
};