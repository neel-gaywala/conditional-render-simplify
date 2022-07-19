# Conditional Render Simplify

Render React components conditionally.

## What does Simplify component do

Take a look at the following presentational component, which contains a commonly used pattern for conditional rendering:

```jsx
const Greeting = ({ isAuthenticated, isAdmin, name }) => (
  <div>
    <Header />
    {isAuthenticated ? (
      isAdmin ? (
        <span className="foo">Welcome back, Admin!</span>
      ) : (
        <span className="foo">Welcome back, {name}!</span>
      )
    ) : (
      <span className="foo">Welcome, Sign Up Now!</span>
    )}
    <Footer />
  </div>
);
```

With Simplify you can rewrite this into a more readable, reusable and expressive format:

```jsx
const Greeting = ({ isAuthenticated, isAdmin, name }) => (
  <div>
    <Header />
    <Simplify
      conditions={isAuthenticated ? (isAdmin ? "admin" : "member") : "viewer"}
      admin={<span className="foo">Welcome back, Admin!</span>}
      member={<span className="foo">Welcome back, {name}!</span>}
      viewer={<span className="foo">Welcome, Sign Up Now!</span>}
    />
    <Footer />
  </div>
);
```

or something like these

```jsx
const Greeting = ({ isAuthenticated, isAdmin, name }) => (
  <div>
    <Header />
    <Simplify
      conditions={{
        viewer: !isAuthenticated,
        admin: isAdmin,
        member: !isAdmin,
      }}
      admin={<span className="foo">Welcome back, Admin!</span>}
      member={<span className="foo">Welcome back, {name}!</span>}
      viewer={<span className="foo">Welcome, Sign Up Now!</span>}
    />
    <Footer />
  </div>
);
```

## What does If component do

Take a look at the following presentational component, which contains a commonly used pattern for conditional rendering:

```jsx
const Bar = ({ name, age, drinkingAge }) => (
  <div>
    <Header />
    {age >= drinkingAge ? (
      <span className="something">Have a beer, {name}!</span>
    ) : (
      <span className="something">Sorry, {name}, you are not old enough.</span>
    )}
    <Footer />
  </div>
);
```

With If you can rewrite this into a more readable, expressive format:

```jsx
const Bar = ({ name, age, drinkingAge }) => (
  <div>
    <Header />
    <If
      condition={age >= drinkingAge}
      true={<HaveABeer />}
      false={<Sorry />}
    />
    <Footer />
  </div>
);
```
