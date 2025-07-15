### 2.0.0

### addCopyRight Function

Uses destructured parameters directly.

Adds support for custom year and target="\_blank" for links.

Fully declarative, easy to extend.

### usage:

```js
addCopyRight({
  title: "My App",
  company: "MyCo",
  site: "https://myco.dev",
  year: 2023,
});
addCopyRight({ title: "My App", company: "MyCo", site: "https://myco.dev" }); // current year passed
```

### 1.0.3

### Added: `LinkPreviewFetcher` Class

Introduced a modular `LinkPreviewFetcher` utility class to fetch website metadata (title, description, image, URL) using the [LinkPreview API](https://www.linkpreview.net/).
Follows the composition principle with support for custom HTTP clients (`fetch`, `axios`, etc.), making it easy to integrate into any frontend or backend project.

### Simple Usage

```js
const fetcher = new LinkPreviewFetcher("your-api-key");

fetcher
  .fetchPreview("https://example.com")
  .then((data) => {
    console.log(data.title); // → "Example Domain"
    console.log(data.description); // → "This domain is for use in illustrative examples..."
    console.log(data.image); // → "https://example.com/preview.jpg"
    console.log(data.url); // → "https://example.com"
  })
  .catch((error) => {
    console.error("Error fetching preview:", error);
  });
```

---

### 1.0.2

Adds support for commonJS
