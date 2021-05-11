export default ({ isServer }) => {
  if (isServer) return

  return new Promise((resolve) => {
    setTimeout(resolve, 400)
  })
}
