# Conditional Render

[![npm](https://img.shields.io/npm/v/conditional-render-simplify?logo=npm)](https://www.npmjs.com/package/conditional-render-simplify)

Render React components conditionally.

## What does `Simplify` component do?

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
      admin={welcomeAdmin()}
      member={<span className="foo">Welcome back, {name}!</span>}
      viewer={<SignupNow />}
    />
    <Footer />
  </div>
);
```

<br />

## What does `If` component do?

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
    <If condition={age >= drinkingAge} true={<HaveABeer />} false={<Sorry />} />
    <Footer />
  </div>
);
```

# Documents

<br />

## Simplify Component

| Props      | Default   | Detail                                                                                                                                                                                                                                                     |
| ---------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| conditions | undefined | conditions can be `string` or `object`,<br /> 1. If conditions `string` is passed, then prop with that name will be rendered. <br /> 2. If conditions `object` is passed, then first key with value `true` will be rendered, otherwise will return `null`. |
| multiple   | false     | If conditions are in `object` and multiple is `true` then all key with value `true` will be rendered, otherwise first key with value `true` will be rendered.                                                                                              |

<br />

## If Component

| Props     | Default | Detail                                                                |
| --------- | ------- | --------------------------------------------------------------------- |
| condition | false   | condition will be checked                                             |
| true      | null    | When condition is true, will render `true` element passed with `If`   |
| false     | null    | When condition is false, will render `false` element passed with `If` |

<br />

# Examples

## Simplify

Pass conditions based on requirement,

```jsx
const Board = ({ wifi, login, admin }) => (
  <div>
    <Header />
    <Simplify
      conditions={
        wifi
          ? login
            ? admin
              ? "adminPanel"
              : "userPanel"
            : "signUp"
          : "connect"
      }
      adminPanel={<Panel admin />}
      userPanel={<Panel user />}
      signUp={<SignUp />}
      connect={<Connect />}
    />
    <Footer />
  </div>
);
```

```jsx
const Board = ({ wifi, login, admin }) => (
  <div>
    <Header />
    <Simplify
      conditions={{
        connect: !wifi,
        signUp: !login, // wifi && !login
        userPanel: !admin, // wifi && login && !admin
        adminPanel: admin, // wifi && login && admin
      }}
      adminPanel={<Panel admin />}
      userPanel={<Panel user />}
      signUp={<SignUp />}
      connect={<Connect />}
    />
    <Footer />
  </div>
);
```

## If

Pass condition based on requirement,

```jsx
const Bar = ({ name, age, drinkingAge }) => (
  <div>
    <Header />
    <If condition={age >= drinkingAge} true={<HaveABeer />} false={<Sorry />} />
    <Footer />
  </div>
);
```

## Version

Latest version,

```
$ npm install conditional-render-simplify
```

```
$ yarn add conditional-render-simplify
```
