function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0
    const v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

export default [
  {
    id: generateUUID(),
    background: '#213DD3',
    text: 'slide1'
  },
  {
    id: generateUUID(),
    background: '#7ED321',
    text: 'slide2'
  },
  {
    id: generateUUID(),
    background: '#D32160',
    text: 'slide3'
  },
  {
    id: generateUUID(),
    background: '#D36021',
    text: 'slide4'
  },
  {
    id: generateUUID(),
    background: '#50E3C2',
    text: 'slide5'
  }
]
