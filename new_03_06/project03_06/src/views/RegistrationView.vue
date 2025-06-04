<script setup>
const onSubmit = (e) => {
  e.preventDefault();
  console.log("Effettuare registrazione");
};
</script>

<template>
  <form class="box" @submit.prevent="onSubmit">
    <div class="field">
      <label class="label">nome</label>
      <div class="control">
        <input class="input" type="nome" name="n" id="n" required />
      </div>
    </div>

    <div class="field">
      <label class="label">cognome</label>
      <div class="control">
        <input class="input" type="cognome" name="lastname" id="lastname" required />
      </div>
    </div>
     <div class="field"> </div>
    <label class="label">Email</label>
    <div class="control">
        <input class= "input" input type ="email"  name="email" id="email" required >

 </div>

     <div class="field">
      <label class="label">data di nascita</label>
      <div class="control">
        <input class="input" type="data di nascita" name="birthday" id="birthday" required />
      </div>
    </div>

    <div class="field">
      <label class="label">indirizzo</label>
      <div class="control">
        <input class="input" type="indirizzo" name="cap" id="cap" required />
      </div>
    </div>

    <button class="button is-primary" type="submit">
      Registrazione
    </button>
  </form>
</template>





