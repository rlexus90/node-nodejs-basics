const parseEnv = () => {
    const env=process.env;
const envKeys=Object.keys(env).filter(key=>key.startsWith('RSS_'));
if (envKeys.length===0) return console.log('nosing found');
envKeys.forEach(key=>{
	const str =`${key}=${env.key}`;
	console.log(str);
})
};

parseEnv();