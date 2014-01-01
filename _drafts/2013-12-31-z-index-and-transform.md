---
published: false
---

Starting out I knew I wanted to code out the Dribbble shot [END
by Catt](http://drbl.in/jJIr) as a single element. I would use the main element to contain the text, or main part of the ribbon, and then use pseudo elements to create the tails of the ribbon.

In making all this happen, I was presented with of couple challenges.

1. Give the ribbon tail a shadow, without adding extra elements.
2. Preserve the stacking order on transform.

## Give the ribbon tail a shadow

I first tried to create a triangle to create the shadow effect. It worked, but it didn't match up perfectly.

![Ribbon tail with triangles with opacity](https://dl.dropbox.com/s/tmyt5tl3hs36c5y/zindex-ribbon-triangle-op.png)

![Ribbon tail with triangles](https://dl.dropbox.com/s/33ijd9t5fgh0c6t/zindex-ribbon-triangle.png)

And then, it came to me&hellip; a trapezoid!

![Ribbon tail with trapezoids with opacity](https://dl.dropbox.com/s/epktfxr3eh7xceb/zindex-ribbon-trap-op.png)
![Ribbon tail with trapezoids](https://dl.dropbox.com/s/2l2v13jeytdi30c/zindex-ribbon-trap.png)

## Preserve the stacking order on transform

When working on other Pens, I noticed that I had issues preserving the stacking order,`z-index`, of elements once a `transform` is introduced. I didn't know how to remedy it, so I avoided it.

After some research, I dove into [the situation](http://stackoverflow.com/questions/16433864/do-css-transformed-elements-have-default-z-index) that takes place between stacking orders and transforms.