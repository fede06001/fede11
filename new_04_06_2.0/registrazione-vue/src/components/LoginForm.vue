<template>
  <div class="form-container">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input type="email" v-model="form.email" placeholder="Email" required />
      <input type="password" v-model="form.password" placeholder="Password" required />

      <p v-if="error" class="error">{{ error }}</p>
      <p v-if="success" class="success">{{ success }}</p>

      <button type="submit">Accedi</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      error: '',
      success: ''
    };
  },
  methods: {
    login() {
      this.error = '';
      this.success = '';

      if (!this.form.email || !this.form.password) {
        this.error = 'Inserisci email e password.';
        return;
      }

      if (this.form.password.length < 6) {
        this.error = 'Password troppo corta.';
        return;
      }

      // Simulazione di login corretto (da sostituire con chiamata API reale)
      if (this.form.email === 'test@example.com' && this.form.password === 'password123') {
        this.success = 'Login effettuato con successo!';
        this.error = '';
      } else {
        this.error = 'Credenziali non valide.';
        this.success = '';
      }
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
