// object destructuring

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin',
//   }
// }
//
// const { name: publisherName = 'Self-Published'} = book.publisher
// console.log(publisherName)

// array destructuring

// const address = ['1229 S Juniper St', 'Philadelphia', 'Pennsylvania', '19147']

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.50']

const [itemName, ,mediumPrice] = item
console.log(`A medium ${itemName} costs ${mediumPrice}`)
