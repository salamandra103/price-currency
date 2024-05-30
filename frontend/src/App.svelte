<script lang="ts">
  fetch('http://localhost:3001/p2p', {
    method: 'POST'
  }).then((res) => {
    console.log(res);
  });

  // let socket: WebSocket | null = null;

  // function createStreamWebSocket() {
  //   socket = new WebSocket('ws://localhost:3002/stream');

  //   socket.addEventListener('open', () => {
  //     if (!socket) {
  //       return;
  //     }
  //     socket.send(JSON.stringify(['binance']));
  //   });

  //   // Listen for messages
  //   socket.addEventListener('message', (event) => {
  //     console.log('Message from server ', event.data);
  //   });
  // }

  // function closeStreamWebSocket() {
  //   if (!socket) {
  //     return;
  //   }
  //   socket.close();
  // }
</script>

<main>
  Svelte app

  <!-- <button on:click={createStreamWebSocket}>start parse</button>
  <button on:click={closeStreamWebSocket}>stop parse</button> -->
</main>

<style>
</style>
