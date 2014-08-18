Bootstrap Wishlist v0.1.0
==================

[Bootstrap Wishlist](http://elmahdim.com/demo/bootstrap-wl/) is a small lightweight library that provide the missing pieces of the most popular front-end framework [Twitter Bootstrap](http://getbootstrap.com/).

---

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

## Usgae:

## Dropdowns

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

---

## Input group `:focus`


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

---

## Outline Styled

### Buttons
* Options:  `btn-outline`


### Alerts
* Options:  `alert-outline`


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







































