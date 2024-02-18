export default defineNuxtPlugin(({ vueApp }) => {

  vueApp.directive('data-horario', { // Nome da diretiva ('data-horario')
    mounted(el, binding) { // Definindo o momento que será a criada a diretiva. O 'mounted' significa no momento da criação da aplicação
      const dataFormatada = new Date(el.innerText)
      el.innerHTML = formataData(dataFormatada, binding.value)
    }
  })

  const formataData = (data: Date, tipo: string = "") => {
    switch (tipo) {
      case "dd/mm/yyyy":
        return data.toLocaleDateString("pt-BR");
      case "hh:mm":
        return data.toLocaleTimeString("pt-BR");
      default:
        return data.toLocaleString("pt-BR");
    }
  }
})