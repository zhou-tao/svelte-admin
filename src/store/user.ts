import { writable } from 'svelte/store'

export const userStore = writable({
  id: 0,
  name: 'coder',
  userId: -1,
  username: 'Tooz',
  gender: '1',
  avatar: 'https://avatars.githubusercontent.com/u/36221207?v=4',
  deptCode: '007',
  deptName: '开发部',
  mobile: '18812345678',
  security: true, // 密码安全性
  roles: [],
  posts: []
})
