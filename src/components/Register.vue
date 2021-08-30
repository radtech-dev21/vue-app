<template>
  <div>
    <b-form @submit="onSubmit" v-if="show">
      <b-form-group id="input-group-1" label="User Name:" label-for="input-1">
      <b-form-input id="input-1" v-model="form.username" type="text" placeholder="Enter username" :state="validateState('username')"></b-form-input>
      <b-form-invalid-feedback id="input-1-live-feedback">This is a required field.</b-form-invalid-feedback>
      </b-form-group>
      <b-form-group id="input-group-2" label="Email:" label-for="input-1">
      <b-form-input id="input-2" v-model="form.email" type="email" placeholder="Enter email" :state="validateState('email')"></b-form-input>
      <b-form-invalid-feedback id="input-2-live-feedback">This is a required field.</b-form-invalid-feedback>
      </b-form-group>
      <b-form-group id="input-group-3" label="Password:" label-for="input-2">
      <b-form-input type="password" id="input-3" aria-describedby="password-help-block" v-model="form.password" placeholder="Enter Password" :state="validateState('password')"></b-form-input>
      <b-form-invalid-feedback id="input-3-live-feedback">This is a required field.</b-form-invalid-feedback>
      </b-form-group>
      <b-form-group id="input-group-4" label="Confirm Password:" label-for="input-2">
      <b-form-input type="password" id="input-4" aria-describedby="password-help-block" v-model="form.confirm_password" placeholder="Enter Confirm Password" :state="validateState('confirm_password')"></b-form-input>
      <b-form-invalid-feedback id="input-4-live-feedback">This is a required field.</b-form-invalid-feedback>
      </b-form-group>
      <b-button type="submit" variant="primary">Sign Up</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
  </template> 
<script>
  import { validationMixin } from "vuelidate";
  import { required, minLength } from "vuelidate/lib/validators";
  export default {
    mixins: [validationMixin],
    data() {
      return {
        form: {
          email: '',
          username:'',
          password: '',
          confirm_password:''
        },
        show: true
      }
    },
    validations:{
      form: {
        email: {
          required
        },
        username:{
            required
        },
        password: {
          required,
          minLength: minLength(8)
        },
        confirm_password: {
          required,
          minLength: minLength(8)
        }
      }
    },
    methods: {
      validEmail : function(email) {
        var re = /(.+)@(.+){2,}\.(.+){2,}/;
        return re.test(email.toLowerCase());
      },
      validateState(name) {
        const { $dirty, $error } = this.$v.form[name];
        return $dirty ? !$error : null;
      },
      onSubmit(event) {
        event.preventDefault()
        this.$v.form.$touch();
        if (this.$v.form.$anyError) {
          return;
        }
        alert("Form submitted!");
      }
    }
  }
</script>