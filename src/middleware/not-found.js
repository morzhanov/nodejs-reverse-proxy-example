export const notFoundHandler = async ctx => {
  const msg = `${ctx.request.method} ${ctx.request.path}`
  ctx.status = 404
  ctx.message = `Not found: ${msg}`
}
