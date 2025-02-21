```javascript
// Correct usage of `@apply` directive:
/* In your tailwind.config.js file */
module.exports = {
  theme: {
    extend: {
      textColor: {
        'primary': '#3B82F6',
      }
    }
  },
  plugins: [],
}

// In your main component
<div class="bg-gray-100 p-4">
  <p class="text-primary">This text should have a gray background and padding.</p>
</div>
```