function FindWordStartingWith(book, query) {
  // Your code here:
  const { text } = book;
  const words = text.split(' ')
  const indexes = []
  let pointer = 0
  words.forEach((word) => {
    if (word.toLowerCase().indexOf(query) === 0)
      indexes.push(pointer)
    pointer += word.length + 1 // + space
  })
  return indexes
}

module.exports = FindWordStartingWith

const book = {
  id: 1,
  text: 'Erase una vez un libro de palabras que era un poco aburrido pero tenia mucho aunque algunas palabras locas'
}
FindWordStartingWith(book, 'de')
FindWordStartingWith(book, 'un')