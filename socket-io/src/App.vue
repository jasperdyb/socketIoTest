<template>
  <div id="app">
    <ul id="messages">
      <li v-for="chat in chats" :key="chat.message">{{chat}}</li>
    </ul>
    <form action @submit.stop.prevent="afterSubmit">
      <input id="m" autocomplete="off" v-model="message" />
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  data() {
    return {
      message: "",
      chats: []
    };
  },
  components: {
    // HelloWorld
  },
  sockets: {
    "chat message": function(msg) {
      console.log("sockets", msg);
      this.chats.append({ message: msg });
    }
  },
  methods: {
    afterSubmit() {
      console.log(this.message);
      this.$socket.emit("chat message", this.message);
      this.message = "";
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font: 13px Helvetica, Arial;
}

form {
  background: #000;
  padding: 3px;
  position: fixed;
  bottom: 0;
  width: 100%;
}

form input {
  border: 0;
  padding: 10px;
  width: 90%;
  margin-right: 0.5%;
}

form button {
  width: 9%;
  background: rgb(130, 224, 255);
  border: none;
  padding: 10px;
}

#messages {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

#messages li {
  padding: 5px 10px;
}

#messages li:nth-child(odd) {
  background: #eee;
}
</style>
