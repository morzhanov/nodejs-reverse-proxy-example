export const notFoundHandler = async ctx => {
  const msg = `${ctx.request.method} ${ctx.request.path}`
  ctx.status = 404
  ctx.message = `NodeJS API Page Not found: ${msg}`
}
