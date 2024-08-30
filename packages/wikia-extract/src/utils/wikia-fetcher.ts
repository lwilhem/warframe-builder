import cheerio from "cheerio"

export async function fetchWarframePimaryWeaponsList() {
  // const primary_weapons: string[] = []

  try {
    const primary_weapons_request = await fetch("https://warframe.fandom.com/wiki/Module:Weapons/data")
    const primary_weapons_response = await primary_weapons_request.text()

    const page = cheerio.load(primary_weapons_response)

    return page
  }
  catch (err) {
    console.error("failed to fetch primary weapons list")
    throw new Error(String(err))
  }
}
