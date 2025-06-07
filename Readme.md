# 🚄 Locomotive Scroll Documentation (Unofficial)

Locomotive Scroll is a smooth scroll library with parallax and scroll-triggered animations. This guide covers available attributes, customization options, and behavior enhancements.

---

## 📦 Installation

### Using npm:

```bash
npm install locomotive-scroll
```

### Or via CDN:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.4/dist/locomotive-scroll.min.css"
/>
<script src="https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.4/dist/locomotive-scroll.min.js"></script>
```

---

## 🚀 Initialization

```js
import LocomotiveScroll from "locomotive-scroll";

const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  lerp: 0.075,
  multiplier: 1
});
```

---

## 🔖 HTML Data Attributes Reference

| Attribute                  | Description                                                              |
| -------------------------- | ------------------------------------------------------------------------ |
| `data-scroll`              | Activates the element for scroll-based animation                         |
| `data-scroll-speed`        | Sets scroll speed (e.g., `2`, `-1`) — creates parallax effect            |
| `data-scroll-direction`    | `horizontal` or `vertical` (for speed parallax)                          |
| `data-scroll-delay`        | Adds delay to scroll animation                                           |
| `data-scroll-class`        | Adds class when element enters the viewport                              |
| `data-scroll-repeat`       | Allows animation/class to repeat when re-entering the viewport           |
| `data-scroll-call="name"`  | Triggers scroll callback with name (used in JS `scroll.on('call', ...)`) |
| `data-scroll-target="#id"` | Makes scroll speed relative to another element                           |
| `data-scroll-position`     | `top`, `bottom`, `left`, `right` — defines the trigger point             |
| `data-scroll-offset`       | Offset trigger distance (e.g., `50`, `"20%"`, `["20%", "10%"]`)          |

---

## ⚙️ JavaScript Options

| Option                  | Type      | Description                                          |
| ----------------------- | --------- | ---------------------------------------------------- |
| `el`                    | `Element` | Required. Scroll container (`data-scroll-container`) |
| `smooth`                | `Boolean` | Enables smooth scroll (default: `false`)             |
| `smoothMobile`          | `Boolean` | Enables smooth scroll on mobile (default: `false`)   |
| `lerp`                  | `Number`  | Easing factor (`0.1` = slow, `1` = instant)          |
| `multiplier`            | `Number`  | Scroll speed multiplier (default: `1`)               |
| `direction`             | `String`  | `vertical` or `horizontal` scroll                    |
| `gestureDirection`      | `String`  | Touch gesture behavior (usually same as `direction`) |
| `tablet` / `smartphone` | `Object`  | Device-specific overrides                            |

### Example:

```js
const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  smoothMobile: true,
  lerp: 0.1,
  multiplier: 1.2,
  tablet: { smooth: true },
  smartphone: { smooth: false }
});
```

---

## 🎨 Custom Animations

### CSS Example:

```html
<div
  data-scroll
  data-scroll-class="fade-in"
  data-scroll-repeat
  class="my-element"
></div>
```

```css
.fade-in {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 1s ease, transform 1s ease;
}
.my-element {
  opacity: 0;
  transform: translateY(20px);
}
```

### JavaScript Callback Example:

```js
scroll.on("call", (func, way, obj) => {
  if (func === "fadeIn") {
    // Trigger any action like animation or function call
  }
});
```

---

## 🧩 Tips

- Always wrap content in a `data-scroll-container`.
- Use GSAP for complex animation timelines.
- Combine `data-scroll-call` with custom JavaScript logic.
- Avoid using `position: fixed` inside the scroll container.

---

## 🔁 Destroy & Update

```js
scroll.destroy(); // Remove Locomotive instance
scroll.update(); // Refresh element positions and layout
```

---

## 🧪 Basic Example

```html
<body data-scroll-container>
  <section data-scroll-section>
    <div data-scroll data-scroll-speed="2">Parallax Element</div>
    <div data-scroll data-scroll-class="is-visible" data-scroll-repeat>
      Scroll-triggered fade-in
    </div>
  </section>
</body>
```

---

Happy Scrolling! 🚀
