const logado = true

export default defineNuxtRouteMiddleware((to, from) => {
  // Verificando se não está na página de login e se não está logado
  if (to.path !== "/login" && !logado) {
    return navigateTo("/login")
  }
})