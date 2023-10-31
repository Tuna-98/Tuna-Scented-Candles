<script setup lang="ts">  
import {Form, Field, useForm, useField } from "vee-validate";
import * as yup from "yup";

interface LoginForm {
  username : string,
  password: string,
}

const schema = yup.object({
  username: yup.string().required("invalided"),
  password: yup.string().required("invalided"),
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
  <div class="login-form">
    <div class="flex flex-col justify-center px-0 py-12">
      <div class="mt-10">
        <form @submit.prevent="loginSubmit">
          <div class="form-group">
            <InputField
              name="username"
              label="Username or email address *"
              placeholder="Username or email address *"
              :model-value="username"
            />
            <InputField
              name="password"
              label="Password *"
              type="password"
              :model-value="password"
            />
          </div>
          <button type="submit" class="btn-login flex w-full justify-center px-3 py-4 text-white">LOG IN</button>
        </form>
      </div>
    </div>
  </div>
</template>