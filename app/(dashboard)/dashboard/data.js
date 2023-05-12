// Note: the way you would do data fetching depends on
// the framework that you use together with Suspense.
// Normally, the caching logic would be inside a framework.

let cache = new Map();

export function fetchData(url) {
  return getData(url)
}

async function getData(url) {
    let data = await fetch("https://api.github.com/users/m14ebrskull5/events/public", {
        
    });
    // console.log(await data.text(), data.value, 111)
    return data.json()

}

