import delay from './delay.js'

const words = ['Anh Hao.', 'A Developer.', 'A Blogger.']
let i = 0
let timer

function typingEffect(element) {
  let word = words[i].split('')
  let loopTyping = async function () {
    if (word.length > 0) {
      element.textContent += word.shift()
    } else {
      await delay(600)
      await deletingEffect(element)
      return false
    }
    timer = setTimeout(loopTyping, 160)
  }
  loopTyping()
}

function deletingEffect(element) {
  let word = words[i].split('') // Change string to an array
  let loopDeleting = async function () {
    if (word.length > 0) {
      word.pop()
      element.textContent = word.join('')
    } else {
      if (words.length > i + 1) {
        i++
      } else {
        i = 0
      }
      await delay(500)
      await typingEffect(element)
      return false
    }
    timer = setTimeout(loopDeleting, 70)
  }
  loopDeleting()
}

export default typingEffect
