const baseUrl = 'https://cnodejs.org/api/v1/'

// 得到URL的方法
const newUrl = ( urlStr , data = { })=>{
	let url = `${baseUrl}${urlStr}`

	if(data){
		let dataString = ' ';
		Object.keys(data).forEach(key=>{
			// 返回一个自身枚举的 键 然后foreach遍历出来每一个键 加上值后面再加& 
			dataString += key + '=' + data[key] + '&'
		})

		if(dataString !== ' '){
			dataString = dataString.substr(0,dataString.lastIndexOf('&'))

			url = url + '?' +dataString
		}
	}
	return url
}

// IE8以上 支持Fetch方法
const useFetch = async(type,url, data) =>{
	const reqConfig = {
		method : type,
		headers :{ 
			Accept : 'application/json',
			'Content-Type' : 'application/json'
		},
		cache : 'force-cache',
		// mode : 'no-cors'
	}

	if(type === 'POST'){
		// POST 请求就在 本身 再加上一个属性 value
		Object.defineProperty(reqConfig,'body',{
			value : JSON.stringify(data)
		})
	}

	try{
		const res = await fetch(url,reqConfig)
		const resJSON = await res.json()
		return resJSON
	}catch(err){
		throw new Error(err)
	}
}

// IE8以下的 
const useXHR = (type, url,data) =>{
	const p = new Promise(resolve=>{
		let xhr ;
		if(window.XMLHttpRequest){
			xhr = new XMLHttpRequest();
		}else{
			xhr = new ActiveXObject();
		}

		let sendData = null;

		if(type === 'POST'){
			sendData = JSON.stringify(data)
		}
		xhr.open(type,url,true)
		xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded')
		xhr.send(sendData)

		xhr.onreadystatechange = ()=>{
			if(xhr.readyState === 4){
				if((xhr.status >= 200 && xhr.status<300)||xhr ==304){
					let obj = xhr.response;
					if(typeof obj !== 'object'){
						obj = JSON.parse(obj)
					}
					resolve(obj)
				} else{
					throw new Error(xhr)
				}
			}
		}
	})

	return p;
}

export default async (typeStr = 'GET' ,urlStr =' ',data = {} )=>{
	const url = newUrl(urlStr,data);
	const type = typeStr.toUpperCase();
	if(window.fetch){
		return useFetch(type,url,data)
	}else{
		return useXHR(type,url,data)
	}
}