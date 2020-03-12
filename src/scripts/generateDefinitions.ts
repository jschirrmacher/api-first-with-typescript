import dtsGenerator  from 'dtsgenerator'
import * as fs from 'fs'
import { safeLoad } from 'js-yaml'
import path from 'path'

async function main(): Promise<void> {
    const content = safeLoad(fs.readFileSync(path.resolve(__dirname, '..', '..', 'OAS3.yaml'), 'utf8'));
    const result = await dtsGenerator({
        contents: [content],
        namespaceName: ''
    })
    
    // provide a proper Date data type instead of a formated string
    const typescriptDocument = result.replace(/string; \/\/ date-time/g, 'Date;')
    fs.writeFileSync('./src/types/apifirst-ts/index.d.ts', typescriptDocument)
}
main()
