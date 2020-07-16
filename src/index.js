/* eslint-disable */

const goTo = {
    install(Vue, options) {
      Vue.mixin({
        methods: {
          $goTo(name, params = null) {
            if (this.$route.name === name) {
              this.$router.go(this.$router.currentRoute);
            } else {
              this.$router.push({
                name,
                params
              });
            }
          }
        }
      });
    }
  };

  export default goTo;
