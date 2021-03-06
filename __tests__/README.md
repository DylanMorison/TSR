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

<ul>
<li>snapshot testing is a way to "freeze" a component</li>
<li>tests fail if there are any changes</li>
<li><strong>downsides</strong> of snapshot testing?</li>
<ul>
<li>Very brittle</li>
<li>no test driven development</li>
</ul>
</li>
</ul>

## Course Notes

### What is a mock function?

<ul>
<li>Fake function that runs instead of real function</li>
<ul>
<li>Can run alternate code, or just act as placeholder</li>
</ul>
<li>Jest replaces real function with mock func</li>

<ul>
