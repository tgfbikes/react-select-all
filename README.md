# React select all 

A very simple checkbox that supports checked, unchecked, and indeterminite states. Based off the functionality of the select all checkbox in Gmail.

## Demo
[Demo](https://tgfbikes.github.io/react-select-all/)

## Installation
```bash
npm install @tgfbikes/react-select-all
```

## Usage
```js
<SelectAll
  id="select-all"
  items={this.captains}
  itemsSelected={this.state.selectedCaptains.length}
  onChange={this.handleSelectAll}
/>
```

