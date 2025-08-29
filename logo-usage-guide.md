# DeDi Logo Usage Guide

## Logo Design Concept

The DeDi logo represents the core essence of a Decentralized Directory through:

- **The "D" Shape**: A stylized letter "D" that forms the foundation of the brand name
- **Network Nodes**: Seven strategic connection points representing the decentralized nature of the platform
- **Connection Lines**: Lines linking the nodes symbolize the interconnected network and data flow
- **Gradient Colors**: Blue (#1a73e8) to Green (#34a853) representing trust, growth, and innovation

## Logo Files

- `dedi-logo.svg` - Main logo file (scalable vector format)
- Logo is embedded directly in the website header and footer

## Logo Variations

### 1. **Colored Version** (Default)
- Blue to green gradient
- Best for light backgrounds
- Use for: Website headers, presentations, marketing materials

### 2. **White Version**
- Pure white for dark backgrounds
- Use for: Dark themes, footer sections, dark presentations

## Usage Guidelines

### Do's:
- ✅ Maintain the aspect ratio when scaling
- ✅ Ensure adequate white space around the logo
- ✅ Use the white version on dark backgrounds
- ✅ Use the gradient version on light backgrounds

### Don'ts:
- ❌ Don't distort or stretch the logo
- ❌ Don't change the colors arbitrarily
- ❌ Don't add effects like shadows or outlines
- ❌ Don't place on busy backgrounds

## Technical Specifications

- **Format**: SVG (Scalable Vector Graphics)
- **Viewbox**: 100x100 units
- **Primary Colors**: 
  - Blue: #1a73e8
  - Green: #34a853
  - White: #ffffff (for dark backgrounds)

## Implementation Examples

### Website Header:
```html
<svg width="40" height="40" viewBox="0 0 100 100">
  <!-- Logo code -->
</svg>
```

### Dark Background:
```html
<!-- Use white stroke and fill instead of gradient -->
<path stroke="white" />
<circle fill="white" />
```

## Favicon
The logo is automatically used as a favicon through the HTML link tag:
```html
<link rel="icon" type="image/svg+xml" href="dedi-logo.svg">
```

## Future Considerations

- Create PNG versions for platforms that don't support SVG
- Consider animated version for loading states
- Develop monochrome versions for single-color printing
