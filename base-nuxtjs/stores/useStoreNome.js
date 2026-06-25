import { defineStore } from 'pinia'

export const useStoreNome = defineStore('storeNome', {
  state: () => {
    return {
      nome: 'NuxtJS'
    }
  },
  actions: {
    inicializarNome() {
      if (process.client) {
        const nomeSalvo = localStorage.getItem('nuxtjs-app-nome')
        if (nomeSalvo) {
          this.nome = nomeSalvo
        } else {
          this.nome = 'NuxtJS'
          localStorage.setItem('nuxtjs-app-nome', 'NuxtJS')
        }
      }
    }
  }
})
