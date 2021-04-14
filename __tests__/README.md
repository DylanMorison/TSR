## Different types of tests

### Unit Tests:

Tests one piece of code (usually one function)

### Integration Tests:

Tests how multiple units work together

### Acceptance / End-to-end (E2E) Tests:

Uses actual browser and connections to server

### Functional Tests:

Can be any of the above tests, except with a focus on user flow.
In general,

- code based tests == testing implementation
- Functional tests == testing behavior and user experience

### But what about _snapshot testing_?

- snapshot testing is a way to "freeze" a component
- tests fail if there are any changes
- downsides of snapshot testing?
  -Very brittle
  -no TDD
