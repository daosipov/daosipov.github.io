const childProcess = require('child_process')
const path = require('path')

const PROJECT_FOLDER = 'daosipov.github.io'
const subprocessFolder = path.resolve(__dirname, `../${PROJECT_FOLDER}`)

const exec = childProcess.exec;

function execPromise(command, options = {
    cwd: subprocessFolder
}) {
    return new Promise(function (resolve, reject) {
        exec(command, options, (error, stdout, stderr) => {
            if (error) {
                reject(error);
                return;
            }

            resolve(stdout.trim());
        });
    }).catch(e => console.log('e: ', e));
}

const main = async () => {
    await execPromise('git add . && git commit -m "commit" && git push origin master')
}

main();