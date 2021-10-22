const linksSocialMedia = {
  github: 'julianpbarbosa',
  youtube: 'channel/UCW57QV1EVCBipp_tVUJxbIQ',
  facebook: 'profile.php?id=100009714604613',
  instagram: 'julian_barbosa24',
  twitter: 'Julianp_Barbosa'
}
function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `http://${social}.com/${linksSocialMedia[social]}`
  }
}
// humano lê 123456789
// computador lê 0123456789
// changeSocialMediaLinks()

// function getGitHubProfileInfos() {
//   const url = `https://api.github.com/users/${linksSocialMedia.github}`

//   fetch(url)
//     .then(Response => Response.json())
//     .them(data => {
//       alert(data.name)
//       userName.textContent = data.name
//       userBio.textContent = data.Bio
//       userLink.textContent =dataUrl
//     })
// }
// getGitHubProfileInfos()
// não entendi nada
