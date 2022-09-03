<script setup>
import { onMounted } from 'vue';
import LangIcons from './LangIcons.vue';
import SocialPlatforms from './SocialPlatforms.vue';
import avatar from "./assets/avatar.png"

function cardFlip() {
  // 
}

// TODO: Remove blog link and just display entries here?
// onMounted(() => {
//   fetch({
//     mode: 'no-cors',
//     url: 'https://blog.d8vjork.com/rss.xml',
//   }).then(response => response.text())
//     .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
//     .then(data => console.log(data))
// })
</script>

<template>
  <main class="container h-screen mx-auto py-36">
    <div class="flex min-h-128">
      <div
        class="flex flex-col items-center justify-center w-1/3 py-8 text-white rounded-tl rounded-bl bg-slate-900">
        <div class="w-48 mx-auto bg-indigo-600 rounded-full">
          <img :src="avatar" alt="my_avatar">
        </div>

        <h1
          class="mt-8 text-4xl font-bold">
          D8vjork
        </h1>

        <h2
          class="mt-2 text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
          Software developer
        </h2>

        <LangIcons class="mt-12" />
      </div>

      <div
        class="relative flex flex-col justify-center w-2/3 p-8 rounded-tr rounded-br text-slate-800 bg-slate-100">
        <ul class="flex space-x-4 text-lg list-none text-slate-600">
          <li class="">
            <RouterLink to="/" class="font-bold border-b-2 border-transparent" active-class="border-slate-800">
              About
            </RouterLink>
          </li>
          <li class="">
            <RouterLink to="/projects" class="font-bold border-b-2 border-transparent" active-class="border-slate-800">
              Projects
            </RouterLink>
          </li>
          <li class="">
            <a href="https://blog.d8vjork.com/" target="_blank" class="font-bold border-b-2 border-transparent">
              Blog
            </a>
          </li>
        </ul>

        <RouterView class="mt-4 text-lg" />

        <SocialPlatforms class="absolute mt-4 top-2 right-4" />

        <!-- <button @click="cardFlip"
          class="absolute flex items-center px-6 py-3 text-lg font-bold rounded-full bottom-4 right-4 text-slate-100 bg-gradient-to-r from-purple-500 to-pink-500">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 mr-2">
            <path fill-rule="evenodd"
              d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z"
              clip-rule="evenodd" />
          </svg>

          Flip it!
        </button> -->
      </div>
    </div>
  </main>
</template>
