```javascript
// This code uses Tailwind's `@apply` directive incorrectly, leading to unexpected styles.
<div class="@apply bg-gray-100 p-4">
  <p>This text should have a gray background and padding.</p>
</div>
```