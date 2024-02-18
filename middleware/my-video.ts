export default defineNuxtRouteMiddleware((to, from) => {
  const valorParametro = +to.params.id // O + converte para número (Se não for, retorna NaN)

  // Verificando se é número
  if(isNaN(valorParametro) || valorParametro < 0) {
    return navigateTo("/videos")
  }
})