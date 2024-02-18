<template>
  <div>
    <h1>Components - Nuxt 3</h1>
    <p>Autor: Premium Videos</p>
    <p>{{ diferencaEmDias }} dias atrás</p>
  </div>
</template>

<script setup lang="ts">
  const  { diasPassados, diferencaEmDias } = useFormatacao() // Não precisamos importar o composable. Ele já é auto-importado
  const dataVideo = new Date(2023, 9, 2)

  diasPassados(dataVideo)

</script>