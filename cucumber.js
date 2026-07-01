module.exports = {
  default: {
    paths: ['acceptance_tests/**/*.feature'],
    require: ['step_definitions/**/*.steps.js'],
    format: ['progress'],
  }
};
