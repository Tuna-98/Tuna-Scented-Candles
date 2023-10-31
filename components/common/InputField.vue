<script setup lang="ts">
import Vue from 'vue'
import { Field, ErrorMessage } from "vee-validate";
import { onMounted } from "vue";

interface InputFieldProps {
  class?: String | null;
  lable: String;
  name: String;
  type?: String;
  modalValue?: String | null;
  error?: String | null;
  disable: Boolean;
  inputTypeClass?: String | null,
}

const props = defineProps({
  class: {
    type: String,
  },
  label: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  modelValue: {
    type: String,
    // required: true,
  },
  error: {
    type: String,
  },
  placeholder: {
    type: String,
  },
  disabled: {
    type: String,
  },
  inputTypeClass: {
    type: String
  }
})

const { label, name, type, modelValue, error } = props;

const emit = defineEmits(['updateModelValue', 'enterKey']);

const updatePropValue = (event) => {
  emit('updateModelValue', event.target.value)
}

const enterSearchKey =  () => {
  console.log("enter key");
  emit('enterKey');
}

</script>

<template>
  <div :class="class">
    <div class="input-field block mb-5">
      <label :for="name">{{ label }}</label>
      <div class="mt-1">
        <Field
          :placeholder="placeholder"
          :type="type"
          :name="name"
          @input="updatePropValue($event)"
          @keyup.enter="enterSearchKey()"
          :class="inputTypeClass"
        />
      </div>
      <ErrorMessage :name="name" class="text-red-500"></ErrorMessage>
    </div>
  </div>
</template>
<style>
input{ 
  @apply border w-full py-4 px-2;
}
</style>