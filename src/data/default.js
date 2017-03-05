export const defaultBlogData = [
  {
    text: 'paragraph one',
    type: 'text',
  },
  {
    text: `I'm a apple`,
    type: 'text',
  }
]

export const defaultPosition = {
  open: false,
  position: {}
}

export const defaultSectionData = function() {
  return {
    text: '',
    type: 'text',
  }
}

export const defaultImageData = function(url) {
  return {
    url: url || '',
    fullScreen: false,
    type: 'image',
  }
}