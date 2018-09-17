---
title: Flat icon by _Bosco

tags:
  - Haml
  - Sass
image: http://farm4.staticflickr.com/3708/12730299513_58bce11c10_o.png
pen: ipEka

---

<p data-height="500" data-theme-id="97" data-slug-hash="ipEka" data-user="katydecorah" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/katydecorah/pen/ipEka'>Flat icon by _Bosco</a> by Katy DeCorah (<a href='http://codepen.io/katydecorah'>@katydecorah</a>) on <a href='http://codepen.io'>CodePen</a></p>

I recreated the Dribbble shot Flat icon by Bosco.

Each award is a single element (`.award`) that uses additional classes to decide the color (`.gold`, `.silver`, or `.bronze`) and the type (`.badge` or `.ribbon`). These additional classes allow for mix and matching of the colors and award types. The award is scalable based on `font-size`. Try changing the `$fontSize` in the Sass to see the scaling powers. Please note that the awards are so adorable when the value is small.

While `$fontSize` controls the size of the number and ultimately adjusts the size of the element (all ems all errrthang), `$size` dictates the actual size of the award around the number. Try adjusting `$size` in the Sass to change the proportion of the award to the number.

The awards are all styled the same, but `.ribbon` and `.badge` provide different styles for the pseudo elements. I dreamt up the ribbon tails for `.ribbon` quickly. I manipulated the border by styling a transparent `border-bottom-color`, which created two triangles for the ribbon tails. I added height to the element to elongate it into a ribbon. I created one tail out of each pseudo element.

![diagram of ribbon](http://farm4.staticflickr.com/3708/12730299513_58bce11c10_o.png)

I started to sweat a little while creating the badge. I didn't think I had enough pseudo elements to achieve what looks like a hexagon. In the end, I managed to skimp on a side. I created a rectangle out of the `:before` and used a horizontal gradient to create the three stripes. Then I created a triangle out of the `:after`, but kept it solid colored. Luckily the medallion fit nice and snug up where the triangle and rectangle met.

![diagram of badge](http://farm4.staticflickr.com/3719/12730140135_bb748b1de1_o.png)

Can you tell that I got an iPad for Christmas?
