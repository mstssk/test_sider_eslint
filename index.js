const fs = require("fs");

(async function () {
    const pkg = await readFile("package.json").then(data => JSON.parse(data), onError);
    console.log(pkg.name);
})();

function readFile(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data.toString());
            }

        });
    });
}

function onError(err) {
    console.error(err);
    process.exit(1);
    return null;
}
