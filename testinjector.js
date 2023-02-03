function getgit (owner, repo, path) { 
    // A function to fetch files from github using the api 
    
  let data = await fetch (
    `https://api.github.com/repos/${owner}/${repo}/contents/${path}`
  )
    .then (d => d.json ())
    .then (d =>
      fetch (
        `https://api.github.com/repos/${owner}/${repo}/git/blobs/${d.sha}`
      )
    )
    .then (d => d.json ())
    .then (d => JSON.parse (atob (d.content)));

  return data;
}

var style = getgit("Crafterboy27-school","Hexbois-visual-mod","/style/latest");
let newEl = document.createElement("style");
newEl.innerHTML = style;
document.body.appendChild(newEl);
