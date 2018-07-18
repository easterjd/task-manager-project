
function listLinks (listItem) {
  const link = `
  <a href="#!" id="list_id ${listItem.id}" class="collection-item">${listItem.title}</a>
  `
  return link
}

module.exports = {
  listLinks
}
