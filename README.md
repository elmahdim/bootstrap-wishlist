Bootstrap Wishlist v0.1.1
==================

[Bootstrap Wishlist Docs](http://elmahdim.com/demo/bootstrap-wl/docs.html)

---

## Get Started

- `$ git clone https://github.com/elmahdim/bootstrap-wishlist`
- or [Download](/elmahdim/bootstrap-wishlist/archive/master.zip)

## Install

```html
<!-- Bootstrap core CSS -->
<link rel="stylesheet" href="path/bootstrap.css">
<!-- Bootstrap Wishlist CSS -->
<link rel="stylesheet" href="path/bootstrap.wl.css">

<!-- Bootstrap core Javascript -->
<script src="path/bootstrap.js"><script>
<!-- Bootstrap Wishlist Javascript -->
<script src="path/bootstrap.wl.js"><script>
```
---

### Dropdowns - selected value

```html
<div class="btn-group">
	<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown"> 
	Select <span class="caret"></span></button>
	<input type="hidden" class="selected-val" name="NAME"/>
	<ul class="dropdown-menu dropdown-val" role="menu">
		<li><a data-value="VALUE" href="#">...</a></li>
	</ul>
</div>
```

### File input - preview image

```html
<form>
	<div class="preview-image">
	<img src="placeholder.png" alt="..." data-preview="VALUE" class="img-rounded" />
	<div class="upload-btn">
		<button type="button" class="upload-btn btn btn-default">...</button>
		<input type="file" id="SELECTOR" class="input-file" />
	</div>
	</div>
</form>
```


### Input group `:focus`


```html
<!-- Default input group -->
<div class="input-group default-input-group">
	<input type="text" class="form-control" />
	<span class="input-group-btn">
		<button class="btn btn-default" type="button">Go</button>
	</span> 
</div>

<!-- Prev input group -->
<div class="input-group prev-input-group">
	<input type="text" class="form-control" />
	<span class="input-group-btn">
		<button class="btn btn-default" type="button">Go</button>
	</span> 
</div>
```

### Responsive tables

Usage: `data-rwd="table"` `data-th=""`

```html
<table class="table table-striped table-bordered" data-rwd="table">
	<tr class="table-header"><th>Table Header</th></tr>
	<tr><td data-th="Table Header">...</td></tr>
</table>
```


## Outline Styled

### Buttons
* Options:  `btn-outline`


### Alerts
* Options:  `alert-outline`

---

### Changelog

1. Aug 18, 2014: v0.1.0 - First release
2. Aug 22, 2014: v0.1.1 - Add *Responsive tables*, *Helper classes* and *File input - preview image*

---

### Contributing

Feel free to open an issue or send a pull request.

---

### License 

The MIT License (MIT)

Copyright (c) 2014 Mahmoud

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.







































