import EventEmitter from 'events'

class Post extends EventEmitter {
  constructor(author, text) {
    super()
    this.author = author
    this.text = text
    this.likesQty = 0
    this.on('likePost', (userName) => {
      console.log(`${userName} liked your post`)
    })
    this.on('error', (error) => console.log(error))
  }
  like(userName) {
    if (!userName) {
      return this.emit('error', new Error('No userName in the like request!'))
    }
    this.likesQty += 1
    this.emit('likePost', userName)
  }
}

const myPost = new Post('Tania', 'My greate post!')

// console.log(myPost.author)
// console.log(myPost.text)
// console.log(myPost.likesQty)
myPost.like('Alice')
setTimeout(() => myPost.like(), 1000)
setTimeout(() => myPost.like('Alex'), 2000)
// console.log(myPost.likesQty)
