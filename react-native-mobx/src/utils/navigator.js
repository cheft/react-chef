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
    requestAnimationFrame(() => {
    // InteractionManager.runAfterInteractions(() => {
      func();
    });
  },

  back() {

  },
};
