const fs = require('fs');
const axios = require('axios');

let urlsPromises = [];
const argv = process.argv;
try {
    const fileContent = fs.readFileSync(argv[2], 'utf8');
    let urlsArr = fileContent.split('\n');
    urlsArr.pop();
    for (let url of urlsArr) {
        urlsPromises.push(axios.get(url));
    }
} catch (e) {
    console.log('File not Found');
}

Promise.all(urlsPromises)
    .then(arr => {
        arr.forEach(res => {
            if (!res.data.toString().includes('dnserror')) {
                fs.writeFile(`${new URL(res.config.url).hostname}.txt`, res.data, 'utf8', (err,data) => {
                    console.log(` v ${new URL(res.config.url).hostname}.txt is created`);
                });
            } else {
                console.log(`Can not create ${new URL(res.config.url).hostname}.txt`);
            }
        });
    });