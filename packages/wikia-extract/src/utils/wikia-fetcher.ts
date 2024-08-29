import fs from "node:fs"
import process from "node:process"

export default async function fectWikiaPage(url: string) {
  try {
    const request = await fetch(url, {
      method: "GET",
    })

    const response = await request.text()

    const dump_location = `${process.cwd()}/packages/wikia-extract/dump/dump.txt`

    fs.writeFileSync(dump_location, response)

    console.log(response)
  }
  catch (err) {
    throw new Error(`Error fetching page: ${err}`)
  }
}

fectWikiaPage("https://warframe.fandom.com/wiki/Wisp")
