// import { InteractionManager } from 'react-native';

let debounce;

export default {

  goPage(instance, page, params) {
    const { navigate } = instance.props.navigation;
    const func = () => {
      if (debounce) {
        return;
      }
      navigate(page, params);
      debounce = setTimeout(() => {
        debounce = 0;
      }, 1000);
    };
    /* global requestAnimationFrame */
    /* eslint no-undef: "error" */
    requestAnimationFrame(() => {
    // InteractionManager.runAfterInteractions(() => {
      func();
    });
  },

  back() {

  },
};
