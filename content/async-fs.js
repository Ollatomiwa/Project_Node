const {readFile, writeFile} = require ('fs').promises

const start = async () => {
    try {
        const first = await readFile ('./content/firsr.txt', 'utf8')
        const second = await readFile ('./content/scond.txt', 'utf8')
     await writeFile (
        './content/third-result.txt',
        `THIS IS GREAT: ${first} ${second}`, // error not joininhg the first and second file to the third
        {flag: 'a'}
     )
     console.log(first,second);
    } catch (error) {
        console.log(error);
    }
}
start ()
