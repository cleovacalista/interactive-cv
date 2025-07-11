<script setup>
import SectionTitle from './SectionTitle.vue';
// Data ini akan kita pindah ke backend nanti
const educationHistory = [
{ id: 1, period: '2011 - 2012', institution: 'SD Kendari', major: 'Kelas 1 semester 1' },
{ id: 2, period: '2012 - 2015', institution: 'SD Negeri 007 Samarinda Seberang', major: 'Kelas 1 semester 2 - Kelas 5 semester 2' },
{ id: 3, period: '2015 - 2016', institution: 'SD Mangkukusuman 5 Tegal', major: 'Kelas 6 semester 1' },
{ id: 4, period: '2016 - 2017', institution: 'SD Negeri Manyaran 03 Semarang', major: 'Kelas 6 semester 2' },
{ id: 5, period: '2017 - 2020', institution: 'SMP IT Insan Cendekia Semarang', major: '' },
{ id: 6, period: '2020 - 2022', institution: 'SMA Wachid Hasyim 3 Sedati', major: 'MIPA' },
{ id: 7, period: '2022 - 2023', institution: 'SMA Maarif Yogyakarta', major: 'IPS' }
];
</script>
<template>
<section id="pendidikan" class="py-20 bg-white">
<div class="container mx-auto px-6">
<SectionTitle title="Riwayat Pendidikan" />
<div class="relative">
<div class="absolute h-full border-r-2 border-purple-300" style="left: 50%;"></div>
<div v-for="(edu, index) in educationHistory" :key="edu.id" class="mb-8 flex justify-between items-center w-full">
<div v-if="index % 2 === 0" class="w-full flex">
<div class="w-1/2 pr-8 text-right"><p class="font-semibold text-purple-600">{{ edu.period }}</p><h3 class="text-2xl font-bold text-gray-800">{{ edu.institution }}</h3><p class="text-purple-600">{{edu.major }}</p></div>
<div class="w-1/2 flex justify-start"><div class="w-4 h-4 bg-purple-600 rounded-full z-10"></div></div>
</div>
<div v-else class="w-full flex">

<div class="w-1/2 flex justify-end"><div class="w-4 h-4 bg-purple-600 rounded-full z-10"></div></div>

<div class="w-1/2 pl-8 text-left"><p class="font-semibold text-purple-600">{{ edu.period }}</p><h3 class="text-2xl font-bold text-gray-800">{{ edu.institution }}</h3><p class="text-purple-600">{{edu.major }}</p></div>
</div>
</div>
</div>
</div>
</section>
</template>

import { educationHistory } from '/backend/data.js';
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';
const educationHistory = ref([]);
onMounted(async () => {
try { const response = await
axios.get('http://localhost:3000/api/education');
educationHistory.value = response.data; } catch (error) {
console.error(error); }
});
