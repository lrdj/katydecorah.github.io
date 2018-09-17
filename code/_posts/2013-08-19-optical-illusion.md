---
title: Optical illusions

tags:
  - Sass
  - Haml
pen: gwAmk
image: http://farm8.staticflickr.com/7324/12730510673_c1866394ba_o.png

---

I gave a few optical illusions a try to flex my Sass skills. The source file for each illusion can be found in the JS tab.

## Optical Illusion I

<p data-height="500" data-theme-id="97" data-slug-hash="gwAmk" data-user="katydecorah" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/katydecorah/pen/gwAmk'>Optical Illusion</a> by Katy DeCorah (<a href='http://codepen.io/katydecorah'>@katydecorah</a>) on <a href='http://codepen.io'>CodePen</a></p>

In Haml, I spun out a list with 200 items. I put a width on the entire list of 100em and hid the overflow on the body. I wanted to make sure that each row remained in a row, but was wide enough to stretch across the browser. This came in handy when shifting the rows to create the illusion.

I styled each list item the same, 5em square with a gray border-top. This makes 20 items in each row. Every even list item has a background of black.

Next I had to shift every other row in order to create the optical illusion. Knowing I have 20 items in each row, I knew the range for each row (the first 1-20, the second 21-40 and so on). I wrote a @while loop to build an nth-child range and to increment to every other row.

## Optical Illusion II

<p data-height="500" data-theme-id="97" data-slug-hash="fxpjh" data-user="katydecorah" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/katydecorah/pen/fxpjh'>Optical Illusion II</a> by Katy DeCorah (<a href='http://codepen.io/katydecorah'>@katydecorah</a>) on <a href='http://codepen.io'>CodePen</a></p>

Like the previous pen, I used Haml to spin out over 300 list items. Each list item was styled the same. I added a width to the list to keep the rows from overlapping at smaller browser widths.

I created a @while loop for each row. There are 24 items in each row, so after each row the varialbe $z is increased by 24.

The illusion creates three columns that are created by the narrowing of the list items. In order to define each pseudo column I adjusted the first three and last three items. I wrote a @while loop to target the first and last three items in each pseudo column. I defined variables for where each psuedo column begins and ends. The loop incrementally adjusts the width and margin-left. The loop runs a total of three times to account for the first and last three items in each pseudo column. The loop also swaps the border-color for the center pseudo column.

Then I applied a clear on the first item in each row to be sure my rows remain as rows.

## Optical Illusion III

<p data-height="500" data-theme-id="97" data-slug-hash="pdCsB" data-user="katydecorah" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/katydecorah/pen/pdCsB'>Optical Illusion III</a> by Katy DeCorah (<a href='http://codepen.io/katydecorah'>@katydecorah</a>) on <a href='http://codepen.io'>CodePen</a></p>

As before, I spun out 500 list items in Haml. I styled each item the same. All items have a ::before pseduo element that draws the circle. I absolutely positioned the circle to fit between each square.

I gave the list `margin: 0 -1em;` and hid the overflow on the body. I wanted the illusion to completely fill the page.

Super simple to style and makes you want to barf after a few minues. A success!(?)
