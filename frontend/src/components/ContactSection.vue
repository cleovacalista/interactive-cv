<script setup>
import { ref } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';

const name = ref('');
const email = ref('');
const message = ref('');
const status = ref('');

const sendMessage = async () => {
  try {
    await axios.post('http://localhost:3000/api/send-email', {
      name: name.value,
      email: email.value,
      message: message.value
    });
    status.value = 'Pesan berhasil dikirim!';
    name.value = email.value = message.value = '';
  } catch (error) {
    status.value = 'Gagal mengirim pesan. Coba lagi ya!';
    console.error(error);
  }
};
</script>

<template>
  <footer id="kontak" class="py-20 bg-gray-800 text-white">
    <div class="container mx-auto px-6 max-w-xl text-center">
      <SectionTitle title="Hubungi Saya" />
      <p class="text-lg text-gray-300 mb-6">Jangan ragu untuk terhubung atau bertanya apa pun ya.</p>

      <form @submit.prevent="sendMessage" class="space-y-4 text-left">
        <input v-model="name" type="text" placeholder="Nama" class="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500" required />
        <input v-model="email" type="email" placeholder="Email" class="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500" required />
        <textarea v-model="message" placeholder="Pesan" rows="4" class="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500" required></textarea>
        <button type="submit" class="bg-purple-600 hover:bg-purple-700 transition duration-300 w-full py-3 font-bold rounded">
          Kirim Pesan
        </button>
      </form>

      <p v-if="status" class="mt-4 text-sm text-green-400">{{ status }}</p>

      <div class="flex justify-center space-x-6 mt-12">
        <a href="https://github.com/cleovacalista" target="_blank" class="text-gray-400 hover:text-white transition-colors duration-300">GitHub</a>
        <a href="#" target="_blank" class="text-gray-400 hover:text-white transition-colors duration-300">LinkedIn</a>
      </div>

      <p class="text-sm text-gray-500 mt-8">&copy; {{ new Date().getFullYear() }} Cleova Calista – Dibuat dengan ❤️ dan Vue</p>
    </div>
  </footer>
</template>
