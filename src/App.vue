<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import { ref } from 'vue';

const gridData = ref(['A','B','C','D','E']);
const header = 'header';
</script>

<template>
  <div font-extrabold>{{ header }}</div>
  <div></div>
  <table>
    <tbody border border-b-8 border-black font-extrabold>
      <tr border border-r-8 border-black v-for="entry in gridData" >
        <td
          font-extra
          px-5
          py-3
          border-l-8
          border-t-8
          border
          border-black
          v-for="entry in gridData"
        >
          {{ entry }}
          
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style></style>
