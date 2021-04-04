<template>
  <div id="app">
    <div class="row">
      <div class="column">fieldA</div>
      <div class="column"><input v-model="fieldA" /></div>
    </div>

    <div class="row">
      <div class="column">fieldB</div>
      <div class="column"><input v-model="fieldB" /></div>
    </div>
    <div class="row">
      <div class="column">fieldA: {{ fieldA }}</div>
    </div>
    <div class="row">
      <div class="column">fieldB: {{ fieldB }}</div>
    </div>
  </div>
</template>
<script>
import { mapFields } from "vuex-map-fields";

export default {
  name: "SampleComponent",
  computed: {
    ...mapFields(["fieldA", "fieldB"]),
  },
};
</script>

<style scoped>
.row {
  display: flex;
}

.column {
  flex: 50%;
  width: 200px;
}
</style>>