<script lang="ts">
  // fetch('http://localhost:3001/p2p', {
  //   method: 'POST'
  // }).then((res) => {
  //   console.log(res);
  // });

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

  async function getFiatMap() {
    const data = await fetch('http://127.0.0.1:3000/coinmarketcap/fiat').then(async (res) => {
      return await res.json();
    });
    console.log(data);
  }

  async function getCoinMap() {
    const data = await fetch('http://127.0.0.1:3000/coinmarketcap/cryptocurrency').then(
      async (res) => {
        return await res.json();
      }
    );
    console.log(data);
  }

  async function postBinancePair() {
    const data = await fetch('http://127.0.0.1:3000/binance/p2p', {
      method: 'POST'
    }).then(async (res) => {
      return await res.json();
    });
    console.log(data);
  }
</script>

<main>
  Svelte app

  <!-- <button on:click={createStreamWebSocket}>start parse</button>
  <button on:click={closeStreamWebSocket}>stop parse</button> -->
  <button on:click={getFiatMap}>Fetch fiat</button>
  <button on:click={getCoinMap}>Fetch coin</button>
  <button on:click={postBinancePair}>Fetch binance pair</button>
</main>

<style>
</style>
