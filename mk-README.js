const fs = require('fs').promises;

async function main() {
  const dirents = await fs.readdir("./", { withFileTypes: true })
  let num = 1
  for (const dirent of dirents) {
    if (dirent.isDirectory()) {

      const buf = await fs.readFile(`${dirent.name}/README.md`)
      const readme = buf.toString()
      const found = readme.match(/^#(.*)\n/g)
      if (found) {
        const title = found[0].substr(1).trim()
        const dir = dirent.name
        const n = Number(dir[0])
        if (n != num) {
          num = n
          console.log(`---\n`)
        }
        console.log(`[${dir} : ${title}](${dir})\n`)
      }

    }
  }

}
main()
