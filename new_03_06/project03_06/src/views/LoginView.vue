<script setup>
import { ref } from 'vue';
const onLogin = (e) => {
  console.log('effettuare login');
}

</script>

<template>
<form class="box">
<form action="">


 <div class="field"> </div>
    <label class="label">Email</label>
    <div class="control">
        <input class= "input" input type ="email"  name="email" id="email" required >

 </div>
    <div class="field">
      <label class="label">Password</label>
      <div class="control">
        <input class= "input"  input type ="password"  name="pwd" id="pwd" required >
        
    </div>
    </div>
    <div>
        <button @click="onLogin"  button class="button is-primary" type="submit">Login</button>
          
    </div>
    
</form>

 


</form>
</template>