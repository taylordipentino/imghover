# IMG Hover

![Latest Release Version](https://img.shields.io/badge/Latest-v0.0.1-blue "Latest Release Version")

### A tiny jQuery plugin for adding hover effects to images

Created by [Taylor DiPentino](https://github.com/taylordipentino).

---

## Supported Hover Effects

**Zoom**  
Zoom the image by a given factor, overflow constrained to the original image size.

**Grow**  
Grow the image by a given factor, will cause content to overflow.

## Usage
Basic usage:  

```html
<script src="https://code.jquery.com/jquery-3.5.1.js"></script>
<script src="path/to/imghover.js"></script>
<script>
    jQuery('img').imgHover({
        // options
    });
</script>
```

For more detailed usage, see the [demo site](https://taylordipentino.github.io/imghover/) which has a number of examples. 

## Options
<table>
    <thead>
        <tr>
            <th>Option</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>size</td>
            <td>object|false</td>
            <td>false</td>
            <td>
                An object in the form of {width: '500px', height: '500px'}, or false for automatic sizing.
            </td>
        </tr>
        <tr>
            <td>radius</td>
            <td>string|false</td>
            <td>false</td>
            <td>The border radius value for the image and it's container, or false to disable.</td>
        </tr>
        <tr>
            <td>touch</td>
            <td>boolean</td>
            <td>true</td>
            <td>Determines whether touch events should be used. Setting to false will disable effects for touch devices.</td>
        </tr>
        <tr>
            <td>grow</td>
            <td>boolean</td>
            <td>true</td>
            <td>Determines if the grow effect will be applied</td>
        </tr>
        <tr>
            <td>growScale</td>
            <td>float</td>
            <td>1.05</td>
            <td>The factor by which the image's scale is multiplied on hover</td>
        </tr>
        <tr>
            <td>zoom</td>
            <td>boolean</td>
            <td>true</td>
            <td>Determines if the zoom effect will be applied</td>
        </tr>
        <tr>
            <td>zoomScale</td>
            <td>float</td>
            <td>1.1</td>
            <td>The factor by which the image's scale is multiplied on hover</td>
        </tr>
    </tbody>
</table>

## License
IMG Hover is licensed under the terms of the [MIT License](https://opensource.org/licenses/MIT).

