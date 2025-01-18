<script setup>
import {ref} from 'vue';
import VueFormJsonSchema from 'vue3-form-json-schema';
import PrettyPrint from './helpers/PrettyPrint.vue';

const model = ref({});
const state = ref({});
const valid = ref(false);

const options = {
  "castToSchemaType": true,
  "showValidationErrors": true
};


const componentConfig = {
  component: 'vue-component-name',
  model: 'firstName',
  fieldOptions: {
    on: ['input'],
}
};

const schema =
  {
    "type": "object",
    "required": [
      "allprops"
    ],
    "properties": {
      allprops: {
        "type": "object",
        "required": [
          "user"
        ],
        "properties": {
          "user": {
          type: 'object',
            required: ['firstName'],
  properties: {
    firstName: {
        type: 'string',
                minLength: 3
          },
              lastName: {
        type: 'string',
              }
          }
          }
      }
    }
  }
};
const uiSchema = [
  {
    component: 'InputText',
    model: 'allprops.user.firstName',
    fieldOptions: {
      class: ['form-control'],
      on: ['input'],
      props: {
        type: 'text',
        placeholder: 'I am the InputText component from PrimeVue!',
      },
    },
    errorOptions: {
      attrs: {
        style: 'border:1px solid red'
      }
    }
  },
  {
    component: 'InputText',
    model: 'allprops.user.lastName',
    fieldOptions: {
      class: ['form-control'],
      on: ['input'],
      props: {
        type: 'text',
        placeholder: 'I am the InputText component from PrimeVue!',
  },
    },
    }
  ];

function onChange(value) {
  model.value = value;
}

function onChangeState(value) {
  state.value = value;
}

function onValidated(value) {
  valid.value = value;
}

</script>

<template>

  <div id="example-four" class="container mb-3 mt-3">
    <h1>vue-form-json-schema</h1>
    <h3>Example #4 <small class="text-muted">Vue components example</small></h3>
    <p class="lead">
      <span
      >An example showing how to use Vue components in
        <code>vue-form-json-schema</code>.
      </span>
      <span>In this example we use the <code>InputText</code> component from PrimeVue</span>
    </p>
    <p>
      <span
      >First: Any component or DOM element can be used in
        <code>vue-form-json-schema</code>.
      </span>
      <span
      >Any Vue component which uses the <code>v-model</code> can be
        used.</span
      >
      <span
      >See more info below the demo about how to configure Vue
        components.</span
      >
    </p>

    <vue-form-json-schema
      :options="options"
      v-model="model"
      :schema="schema"
      :ui-schema="uiSchema"
      @update:state="onChangeState"
      @update:validated="onValidated"
    >
    </vue-form-json-schema>

    <hr />

    <p>
      <span
      >Most Vue components which support the <code>v-model</code> can be used
        with a very simple configuration</span
      >
      <pretty-print :value="componentConfig"></pretty-print>
    </p>
    <p>
      <span
      >The <code>vue-component-name</code> should be replaced by the globally
        registered name of the component.</span
      >
      <span
      >A globally registered component is one that is imported and registered
        like this:
        <code>Vue.component('vue-component-name', VueComponentName)</code></span
      >
    </p>
    <p>
      <span>This is pretty much it.</span>
      <span
      >Most Vue components will work right away using this
        configuration.</span
      >
    </p>

    <hr />

    <h4>Model</h4>
    <pretty-print :value="model"></pretty-print>

    <h4>Schema</h4>
    <pretty-print :value="schema"></pretty-print>

    <h4>UI Schema</h4>
    <pretty-print :value="uiSchema"></pretty-print>

    <h4>State</h4>
    <pretty-print :value="state"></pretty-print>

    <h4>Valid</h4>
    <div>{{ valid }}</div>
  </div>

</template>

<style>
</style>
