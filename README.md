# Conditional Render

[![npm](https://img.shields.io/npm/v/conditional-render-simplify?logo=npm)](https://www.npmjs.com/package/conditional-render-simplify)

Render React components conditionally.

## What does `Simplify` component do?

Take a look at the following presentational component, which contains a commonly used pattern for conditional rendering:

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

## What does `Responsive` component do?

The `Responsive` component dynamically renders elements based on screen breakpoints. It is designed to help you implement responsive designs based on mobile-first approach.

```jsx
const App = () => (
  <div>
    <Responsive
      breakpoints={{
        bigDesktop: 1440,
        desktop: 1024,
        tablet: 768,
      }}
      bigDesktop={<div>Big Desktop View</div>}
      desktop={<div>Desktop View</div>}
      tablet={<div>Tablet View</div>}
      defaultLayout={<div>Mobile View</div>}
    />
  </div>
);
```

<br />

## What does `Mapping` component do?

The `Mapping` component renders a list of items with support for fallback states.

```jsx
const App = () => (
  <div>
    <Mapping
      data={listData} // [1, 2, 3]
      renderItem={(item, index) => <Item key={index} item={item} />}
      isLoading={isDataLoading}
      fallbackEmpty={<p>{"No Data Available"}</p>}
      fallbackLoading={<p>{"Loading..."}</p>}
    />
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

## Responsive Component

| Props         | Default   | Detail                                                         |
| ------------- | --------- | -------------------------------------------------------------- |
| breakpoints   | undefined | Object defining breakpoints                                    |
| defaultLayout | null      | A fallback layout to render, this can be a mobile-first layout |

<br />

## Mapping Component

| Props           | Default   | Detail                                           |
| --------------- | --------- | ------------------------------------------------ |
| data            |           | Array of items to be mapped                      |
| renderItem      | undefined | Function to render each item in the `data` array |
| isLoading       | false     | Flag to indicate if loading is in progress       |
| fallbackEmpty   | null      | Element to render when `data` is empty           |
| fallbackLoading | null      | Element to render during loading state           |

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

## 🚀 Hire Me

Looking for a skilled developer to bring your ideas to life? I specialize in building efficient and scalable solutions.

## 📫 Contact Me:

- [Email](mailto:neelgaywala72@gmail.com)
- [Portfolio](https://neel-gaywala.vercel.app/)
- [GitHub](https://github.com/neel-gaywala)
- [LinkedIn](https://www.linkedin.com/in/neel-gaywala-283147116/)
