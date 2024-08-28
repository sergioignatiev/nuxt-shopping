export const useNavigationStore = defineStore('navigation', () => {
  const navigation = ref([
    { id: 1, label: 'Главная', link: '/' },
    { id: 2, label: 'Все Продукты', link: '/products' },
    { id: 3, label: 'Категории', link: '/categories' },
    { id: 4, label: 'Контакты', link: '/contacts' },
  
  ])

  return { navigation }
})
