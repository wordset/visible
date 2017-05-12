export function initialize(application) {
  application.inject('controller', 'visible', 'service:visible');
  application.inject('route', 'visible', 'service:visible');
}

export default {
  name: 'visible-initializer',
  initialize: initialize
};
