<script setup lang="ts">  
import {Form, Field, useForm, useField } from "vee-validate";
import * as yup from "yup";

interface LoginForm {
  username : string,
  email: string,
  password: string,
}

const schema = yup.object({
  username: yup.string().required(""),
  email: yup.string().required(),
  password: yup.string().required(""),
  
})

function onInvalidedSubmit({values, errors, results}) {
  console.log(values);
  console.log(errors);
}

const { handleSubmit, errors, setFieldValue, meta } = useForm<LoginForm>({
  validationSchema: schema,
})

const loginSubmit = handleSubmit(async(value) => {
  $loading.start();
  console.log("start");

  // navigateTo('path': "/home");
})

</script>

<template>
    <div class="register-form">
      <div class="flex flex-col justify-center px-6 py-12">
        <div class="mt-10">
          <form @submit.prevent="loginSubmit" class="space-y-6">


            <InputField
              name="username"
              label="Username *"
              placeholder="Enter username"
              :model-value="email"
            />
            <InputField
              name="email"
              label="Email address *"
              placeholder="example@gmail.com"
              :model-value="email"
            />
            <InputField
              name="password"
              label="Password *"
              placeholder="******"
              :model-value="password"
            />
            <button type="submit" class="btn-login">REGISTER</button>
          </form>
        </div>
      </div>
    </div>
  </template>