const parseArgs = () => {
	const env=process.env;
	const envKeys=Object.keys(env).filter(key=>key.startsWith('--'));
	if (envKeys.length===0) return console.log('nosing found');
	envKeys.forEach(key=>{
		const str =`${key.slice(2)}=${env.key}`;
		console.log(str);
	})
};

parseArgs();