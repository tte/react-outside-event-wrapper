## Intro

Yet another dead-simple `High Order Component (HOC)` event handler. Inspired by  [react-otside-click](https://github.com/kentor/react-click-outside) with extended `event` option.

## Get started

```bash
npm install -S react-outside-event-wrapper
```

## Usage

Note: package is not transpiled to `ES2015`. 

```jsx
import OutsideWrapper from 'react-outside-event-wrapper'

function App(props) {
  const { outsideClickHandler } = props
  return (
    <OutsideWrapper
    eventHandler={outsideClickHandler}
    eventTypes={['click']}>
      <div className="autocomplete-or-dropdown-component">
        Hello, foobar!
      </div>
    </OutsideWrapper>
  )
}

```

Events is plain browser events. Full [list](https://developer.mozilla.org/en-US/docs/Web/Events)

