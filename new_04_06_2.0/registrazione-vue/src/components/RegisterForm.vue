<template>
  <div class="form-container">
    <h2>Registrazione</h2>
    <form @submit.prevent="register">
      <input type="text" v-model="form.name" placeholder="Nome" required />
      <input type="email" v-model="form.email" placeholder="Email" required />
      <input type="password" v-model="form.password" placeholder="Password" required />
      <input type="password" v-model="form.confirmPassword" placeholder="Conferma Password" required />

      <p v-if="error" class="error">{{ error }}</p>
      <p v-if="success" class="success">{{ success }}</p>

      <button type="submit">Registrati</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
      error: '',
      success: ''
    };
  },
  methods: {
    register() {
      this.error = '';
      this.success = '';

      if (!this.form.name || !this.form.email || !this.form.password || !this.form.confirmPassword) {
        this.error = 'Compila tutti i campi.';
        return;
      }

      if (this.form.password.length < 6) {
        this.error = 'La password deve avere almeno 6 caratteri.';
        return;
      }

      if (this.form.password !== this.form.confirmPassword) {
        this.error = 'Le password non corrispondono.';
        return;
      }

      // Simulazione di registrazione
      this.success = 'Registrazione completata con successo!';
      this.form = { name: '', email: '', password: '', confirmPassword: '' };
    }
  }
};
</script>

<style scoped>
.form-container {
  max-width: 400px;
  margin: 50px auto;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
}
button {
  padding: 10px 15px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.error {
  color: red;
  font-size: 0.9em;
}
.success {
  color: green;
  font-size: 0.9em;
}
</style>
