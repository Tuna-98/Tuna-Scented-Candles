// import { defineStore } from 'pinia';

// interface User {
//   username: string;
//   password: string;
// }

// export const useAuthStore = defineStore('auth', {
//   state: () => ({
//     isLoggedIn: false,
//     user: null as User | null,
//   }),
//   actions: {
//     login(username: string, password: string) {
//       // Simulate a successful login with hard-coded user credentials
//       if (username === 'user' && password === 'password') {
//         this.isLoggedIn = true;
//         this.user = { username };
//         return true;
//       } else {
//         return false;
//       }
//     },
//     logout() {
//       this.isLoggedIn = false;
//       this.user = null;
//     },
//   },
// });
