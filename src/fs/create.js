import * as fs from 'node:fs/promises';

const text = 'I am fresh and young';

const create = async () => {
try{
	fs.writeFile('fresh.txt',text);
} catch(err){
	console.error(err);
}

};

await create();