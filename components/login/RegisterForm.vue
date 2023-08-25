<template>
    <div class="register-form">
      <div class="flex flex-col justify-center px-6 py-12">
        <div class="mt-10">
          <form class="space-y-6" action="#" method="POST">
            <div>
              <label for="email" class="block text-sm font-medium leading-6 text-gray-900">
                Username *
              </label>
              <div class="mt-2">
                <input 
                  id="email" 
                  name="email" 
                  placeholder="Username *"
                  type="email" 
                  autocomplete="email" 
                  required
                  class="w-full border px-4 py-4">
              </div>
            </div>
            <div>
              <label for="email" class="block text-sm font-medium leading-6 text-gray-900">
                Email address *
              </label>
              <div class="mt-2">
                <input 
                  id="email" 
                  name="email" 
                  placeholder="Email address *"
                  type="email" 
                  autocomplete="email" 
                  required
                  class="w-full border px-4 py-4">
              </div>
            </div>
            <div>
              <div class="flex items-center justify-between">
                <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
              </div>
              <div class="mt-2">
                <input 
                  id="password" 
                  name="password" 
                  type="password" 
                  placeholder="Password *"
                  autocomplete="current-password" 
                  required
                  class="w-full border px-4 py-4">
              </div>
            </div>
  
            <div>
              <button 
                type="submit"
                class="btn-login flex w-full justify-center px-3 py-4 text-white"
              >
                REGISTER  
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        
      }
    },
  }
  </script>
  <style scoped>
    .btn-login{
      background-color: #222222;
      transition: .3s;
    }
    .btn-login:hover{
      background-color: #DB572E;
      transition: .3s;
    }
    label{
        
    }
  </style>