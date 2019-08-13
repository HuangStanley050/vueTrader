<template>
  <div>
    <h1>Trade or View your portfolio</h1>
    <h6>You May save or load your data</h6>
    <h6>Click on 'End Day' to start a new Day</h6>
    <hr />
    <p>Your funds: {{ funds | currency }}</p>
  </div>
</template>
<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  }
};
</script>
