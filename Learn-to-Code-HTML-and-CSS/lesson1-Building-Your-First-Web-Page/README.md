---
title: Building Your First Web Page
author: rovo98
date: 2019.02.03 23:40
---

# Building Your First Web Page

## What Are HTML & CSS?
> 简单了解什么是HTML和CSS, 了解它们各自的作用。

1. **HTML**(*Hyper Text Markup Language*) 超文本标记语言，主要用于定义网页中的内容和结构。
> HTML gives content structure and meaning by defining tath contnent as, for example, headings, paragraphs, or images.

2. **CSS**(*Cascading Style Sheet*) 层叠样式表，一种表示语言(*presentation Language*)，用于设置内容外观的样式，例如字体、颜色等。
> CSS is a presentation Language created to style the appearance of content -- using for example, fonts or colors.

## Understanding Common HTML Terms
> 了解HTML的三个基本概念: 元素(*Element*)、标签(*Tag*)、属性(*Attributes*)

1. **元素**(*Elements*): 开始标签到结束标签的所有代码。定义了页面中对象的结构和内容。
> Elements are designators that define the structure and content of objects within a page.
> Elements are identified by the use of less-than and greater-than angle brackets, <>, surrounding the element name.

2. **标签**(*Tags*): 由 ``<``和``>``包围一个名称形成。一般分为开始标签(*opening tags*)和结束标签(*closing tags*)， 还有自闭和标签(*self-closing tags*)。
> The use of leess-than and greater-than angle brackets surrounding an element creates what is known as a tag.
> Tags most commonly occur in pairs of opening and closing tags.

3. **属性**(*Attributes*): 属性为一个元素提供额外的信息。常见的属性有``id``(用于标识一个元素)、``class``(用于分类一个元素)、``src``(指定嵌入内容的源)、``href``(为链接资源提供一个超链接引用)。
> Attributes are properties used to provide a additional information about an element. The most common attributes include the ``id`` attribute, which identifies an element; the ``class`` attribute, which classifies an element; the ``src``attribute, which specifies a source for embeddable content; and the ``href`` attribute, which provides a hyperlink reference to a linked resource.

```html
<a href="http://example.com"> Example </a>
```

## Setting Up the HTML Document Structure

所有的``HTML``文档都具有一些必须的结构，包括以下声明和元素(一个HTML文档的基本结构):
```html
<!DOCTYPE html>
<html>
    <head>
        <title></title>
    </head>
    <body>
    </body>
</html>
```
> 文档类型声明``<!DOCTYPE html>``放在文档的最开始位置，用于告诉浏览器``HTML``文档所使用的``HTML``版本。由于使用最新的``HTML``版本，``HTML``声明可以简单的写为``<!DOCTYPE html>``。紧跟文档声明之后的是``<html>``元素，标识着文档的开始。
> 在``<html>``元素里面，``<head>``元素标识文档的顶部，包括任何元数据(关于页面的附带信息)。``<html>``**元素内容不会显示在网页本身上**。
> 它可以包含文档的标题(*title*, 显示在浏览器标签上)、外部文件的链接、以及其他一些有用的元数据。
> **所有的可见的元素内容均放在**``<body>``**元素中。**
> 下面是一个简单的例子:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Hello World</title>
</head>
<body>
    <h1>Hello World</h1>
    <p>This is a web page.</p>
</body>
</html>
```

## Understanding Common CSS Terms

> 同样，我们需要了解``CSS``中的一些基本概念: 选择器(selectors), 属性(properties), 值(values)

1. **选择器(Selectors)**: 一个选择器是用于标明``HTML``文档中哪个或哪些元素来应用我们定义的样式规则。选择器可以包含不同的限定符的组合来选择独特的元素，这都取决于我们的需求。
> As elements are added to a web page, they may be styled using CSS. A selector designates exactly which element or elements within our HTMl to target and apply styles (such as color, size, and position) to.
> Selectors may include a combination of different qualifiers to select unique elements, all depending on how specific we wish to be.
> For example, we may want to select every paragraph on a page, or we may want to select only one specific paragraph on a page.

2. **属性(properties)**: 当选中我们需要的元素后，属性定义了我们将应用到元素上的样式。属性名称放在一个选择器中，例如:

```css
p {
  color: ...;
  font-size: ...;
}
```
> Once an element is selected, a property determines the styles that will be applied to that element. Property names fall after a selector, within the curly brackets, ``{}``, and immediately preceding a colon ``:``. There are numerous properties we can use, such as ``background``, ``color``, ``font-size``, ``height``, and ``width``, and new properties are often added. 

3. **值(values)**: 定义一个属性的具体值。
> So far we've selected an element with a selector and determined what style we'd like to apply with a property. Now we can determine the behavior of that property with a value. 
> Values can be identified as the text between the colon, ``:``, and semicolon, ``;``. 

```css
p {
  color: orange;
  font-size: 16px;
}
```

## Working with Selectors
> 选择器，根据我们的需求选择哪些元素，来应用我们定义的样式规则。我们先简单的了解一下``CSS``中的一些常见选择器类型: 类型、类、ID 选择器。

### Type Selectors
根据元素的类型来标识元素。
> Type selectors target elements by their element type.

```css
div {...}
```

### Class Selectors
类选择让我们可以根据元素的``class``属性的值来选择元素。相对于类型选择器，它选择的是一组元素(类型选择器选择同类型的所有元素)。
> Class selectors allow us to select an element based on the element's class attribute value.
> Class selectors are a little more specific than type selectors, as they select a particular group of elements rather than all elements of one type.

```css
.awesome {...}
```

### ID Selectors
ID 选择器比类选择器根据精确一点，它们只选择一个唯一的元素。
> ID selectors are even more precise than class selectors, as they target only one unique element at a time.
> Just as class seelectors use an element's class attribute value as the selector, ID selectors use an element's id attribute value as a selector.

```css
#testID {...}
```

## Additional Selectors
> 除了上面提到的三种基本的选择器外，还有其他的高级的选择器。

### Common Selectors Overview

|Example|Classification|Explanation|
|:--:|:--:|:--:|
|h1|Type Selector|Selects an element by its type|
|.tagline|Class Selector|Selects an elements by the class attribute value which may be reused multiple times per page|
|#intro|ID Selector|Selects an element by the ID attribute value, which is unique and to only be used once per page|

### Child Selectors
子代选择器选择一个父元素(*parent element*)中的子元素(*child element*)。 分为两种后代选择器和直接后代选择。
> Child selectors provide a way to select elements that fall within one another, thus making them children of their parent element. These selections can be made two different ways, using either descendant or direct child selectors.

1. **Descendant Selector**(后代选择器): 它选择指定父元素中的所有子代元素。后代选择器语法: 用空格间隔两个选择器即可。
> The most common child selector is the descendant selector, which matches every element that follows an idnetified ancestor. Th edescendant element does not have to come directly after the ancestor element inside the document tree, such as a parent-child relationship, but may fall anywhere withiin the ancestor element Descendant selectors are created by spacing apart elements within a selector, creating a new level of hierarchy for each element list.

```css
/* 选择article元素后代中所有h2元素 */
article h2 {...} 
```

```html
<h2>...</h2>
<article>
    <h2>This heading will be selected</h2>
    <div>
        <h2>This heading will be selected</h2>
    </div>
</article>
```

2. **Direct Child Selector**(直接后代选择器): 不同于后代选择器(选择所有的后代元素)， 它只选择指定父元素的直接后代元素。直接后代选择器语法: 在两个选择器之间加入``>``。
> At times only the direct children of parent element need to be selected; ont every instance of the element nested deeply inside of an ancestor.
> In this event the idrect child selector may be used by placing a greater than sign ``>``, between the parent element and the child element within the selector.

```css
article > p {...}
```

```html
<p>...</p>
<article>
    <p>This paragraph will be selected.</p>
    <div>
        <p>...</p>
    </div>
</article>
```

#### Child Selectors Overview

|Example|Classification|Explanation|
|:---:|:---:|:---:|
|article h2 |Descendant Selector|Selects an element that resides anywhere within an identified ancestor element|
|article > p|Direct Child Selector|Selects an element that resides immediately inside an identified parent element|

### Sibling Selectors
兄弟元素都拥有一个共同的父元素，我们可以使用一般兄弟选择器(*general sibling selectors*)和邻近兄弟选择器(*adjacent sibling selectors*)。

> Sibling elements, those elements taht share a common parent, may also need to be selected. These sibling selections can be made by way of the general sibling and adjacent sibling selectors.

1. **General Sibling Selector**(一般兄弟选择器): 选择在指定元素之后并与它拥有相同父元素的元素。语法: 在两个选择器之间加``~``。
> The general sibling selector allow eleements bo be selected based on their sibling elements, those which share the same common parent. They are created by using the tilde character, ``~``, between two elements within a selector. The first element identifies what the second element shall be a sibling with, and both of which must share the same parent.

```css
/* p elements shares the same parent element with every h2 element will be selected.*/
h2 ~ p {...}
```

```html
<p>...</p>
<section>
    <p>...</p>
    <h2></h2>
    <p>This paragraph will be selected</p>
    <div>
        <p>...</p>
    </div>
    <p>This paragraph will be selected</p>
</section>
```

2. **Adjacent Sibling Selector**(邻近兄弟选择器): 选择下一个直接相邻的兄弟元素，语法: 在两个选择器之间加入 ``+``。
> Occasionally a little more control may be desired, including the ability to select a sibling element that directly follows after another sibling element, which is where the adjacent sibling element comes in.
> **The adjacent sibling selector will only select sibling elements directly following after another sibling element.**
> Instead of using the tilde character, as with general sibling selectors, the adjacent sibling selector uses a plus character, ``+``.

```css
/* Only  p elements directly following after h2 elements will be selected*/
h2 + p {...}
```

```html
<p>...</p>
<section>
    <p>...</p>
    <h2>...</h2>
    <p>This paragraph will be selected</p>
    <div>
        <p>...</p>
    </div>
    <p>...</p>
</section>
```

#### Sibling Selectors Overview

|Example|Classification|Explanation|
|:--:|:---:|:---:|
|h2 ~ p|General Sibling Selector|Selects an element that follows anywhere after the prior element, in which both elements share the same parent|
|h2 + p|Adjacent Sibling Selector|Selects an element that follows directly after the prior element, in which both elements share the same parent|

### Attribute Selectors
在``CSS3``中我们可以根据元素的某一属性是否出现或某一属性的值情况来选择元素。
> Elements can be selected based on whether an attribute is present and what its value may contain.

1. **Attribute Present Selector**(属性出现选择器): 根据某个元素是否拥有某一属性来选择元素。 语法: 在选择器后面跟一个``[]``围起来的属性名。
> The first attribute selector identifies an element based on whether it includes an attribute or not, regardless of any actual value. To select an element based on if an attribute is present or not, include the attribute name in square brackets, ``[]``, within a selector. 

```css
a[target]{...}
```

```html
<a href="#" target="_black">...</a>
```

2. **Attribute Equals Selector**(属性值相等选择器): 选择与指定属性值相等的元素。语法: 属性出现选择器的基础上加上一个指定的属性值。
> To identify an element with a specific, and exact matching, attribute value the same selector from before may be used, however this time inside of the square brackets following the attribute value, include the desired matching value.

```css
a[href="http://google.com/"] {...}
```

```html
<a href="http://google.com/">...</a>
```

3. **Attribute Contains Selector**(属性包含选择器): 选择一个属性值包含指定属性值的元素(不同于属性相等选择器，它部分相同)。
> When looking to find an element based on part of an attribute value, but not an exact match, the asterisk character ``*``, may be used within the square barckets of a selector. 

```css
a[href*="login"] {...}
```

```html
<a href="/login.php">...</a>
```

4. **Attribute Begins With Selector**(属性值开始选择器): 选择拥有指定属性值开头的属性值的元素。
> In addition to selecting an element based on if an attribute value contains a stated value, it is also possible to select an element based on what an attribute value begins with. Using circumflex accent ``^``, within the square brackets of a selector between the attribute name and equals sign denotes that the attribute value should begin with the stated value.

```css
a[href^="https://chase.com/"] {...}
```

```html
<a href="https://chase.com/">...</a>
```

5. **Attribute Ends With Selector**(属性值结束选择器): 与*Attribute Begins With Selector*相反，它选择拥有指定属性值结束的属性值的元素。
> Oppsite of the begins with selector, there is also an ends with attribute selector.
> Instead of using teh circumflex accent, the ends with attribute selector uses the dollar sign ``$``, with the square brackets of a selector between the attribute name and equals sign.

```css
a[href$=".pdf"] {...}
```

```html
<a href="/docs/menu.pdf">...</a>
```

6. **Attribute Spaced Selector**(属性间隔选择器): 有时候，元素的属性值可能以空格间隔开，属性间隔选择器是选择包含指定属性值的拥有空格间隔属性值的元素(一个属性值中用空格将多个单词分开)。
> At times attribute values may be spaced apart, in which only one of the words needs to be matched in order to make a selection. In this event using the tilde character ``~``, within the square brackets of a selector between the attribute name and equals sign denotes an attribute value that should be whitespace-separated, with one word matching the exact stated value.

```css
a[ref~="tag"] {...}
```

```html
<a href="#" rel="tag nofollow">...</a>
```

7. **Attribute Hyphenated Selector**(属性连接选择器): 适用于当所需要选择的元素在属性值中使用了连接符的情况，并以指定的属性值开始。不同于空格间隔符。
> When an attribute value is hyphen-separated, rather than whitespace-separated, the vertical line character ``|``, may be used within the square brackets of a selector between the attribute name and equals sign. The vertical line denotes that the attribute value may be hyphen-separated however the hyphen-separated words must begin with the stated value.

```css
a[lang|="en"]{...}
```

```html
<a href="#" lang="en-US">...</a>
```

#### Attribute Selectors Overview

|Example|Classification|Explanation|
|:---:|:---:|:---:|
|a[target]|Attribute Present Selector|Selects an element if the given attribute is present|
|a[href="http://google.com/"]|Attribute Equals Selector|Selects an element if the given attribute value exactly matches the value stated|
|a[href\*="login"]|Attribute Contains Selectors|Selects an element if the given attribute value contains at least once instance of the value stated|
|a[href^="https://"]|Attribute Begins With Selector|Selects an element if the given attribute value begins with the value stated|
|a[href$=".pdf"]|Attribute Ends With Selector|Selects an element if the given attribute value ends with the value stated|
|a[href~="tag"]|Attribute Spaced Selector|Selects an element if the given attribute value is whitespace-separated with one word being exactly as stated|
|a[href|="en"]|Attribute Hyphenated Selector|Selects an element if the given attriubte value is hyphen-separated and begins with the word stated|

### Pseudo-classes
伪类类似``HTML``中的常规的类属性，当它们不直接在文档中直接声明，而是根据用户的操作或文档的结构变动来动态填充(添加)。
> Pseudo-classes are similar to regular classes in HTML however they are not directly stated within the markup, instead they are dynamically populated as a result of users' actions or the document structure.

1. **Link Pseudo-classes**(链接伪类): 定义链接访问或未访问状态样式的伪类。例如``:link``用于定义链接未被访问过的样式；而``:visited``定义链接访问过后的样式。
> Some of the more basic pseudo-classes include two revolving around links specifically.
> The ``:link`` and ``:visited`` pseudo-classes define if a link has or hasn't been visited. To style an anchor which has not been visited the ``:link`` pseudo-class comes into play, where the ``:visited`` pseudo-class style links that a user has already visited based on their browing history.

```css
a:link {...}
a:visited {...}
```

2. **User Action Pseudo-classes**(用户操作伪类): 基于用户的操作，不同的伪类动态地应用到指定的元素上。
> Based on a users' actions different pseudo-classes may be dynamically applied to an element, of which include the ``:hover``, ``:active``, and ``:focus`` pseudo-classes.
> 1. The ``:hover`` pseudo-class is applied to an element when a user moves their cursor over the elements. 
> 2. The ``:active`` pseudo-class is applied to an element when a user engages an element, such as clicking on an element Lastly. 
> 3. The ``:focus`` pseudo-class is applied to an element when a user has made an element the focus point of the page, often by using the keyboard to tab from one element to another.

```css
a:hover {...}
a:active {...}
a:focus {...}
```

3. **User Interface State Pseudo-classes**(用户接口状态伪类): 与链接伪类一样，还有一些围绕元素的用户界面状态生成的伪类，特别是在表单元素中。
> As with the line pseudo-classes there are also some pseudo-classes generated around the user interface state of elements, particularly within form elements. These user interface element state pseudo-classes include: ``:enabled``, ``:disabled``, ``:checked`` and ``:indeterminate``.
> - The ``:enabled`` pseudo-class selects an input that is in the default state of enabled and avaiable for use, where the ``:disabled`` pseudo-class selects an input that has the ``:disabled`` attribute tied to it. Many browers by default will fade out disabled inputs to inform adjusted as wished with the ``:disabled`` pseudo-class.

```css
input:enabled {...}
input:disabled {...}
```
> The ``:checked`` and ``:inderminate`` revolve around checkbox and radio button input elements.
> 1. The ``:checked`` pseudo-class selects checkboxes or radio buttons that are, as you may expect, checked. 
> 2. When a checkbox or radio button has neither been selected nor unselected it lives in an indeterminate state, from which the ``:indeterminate`` pseudo-class can be used to target these elements.

```css
input:checked {...}
input:indeterminate {...}
```

4. **Structural & Position Pseudo-classes**(结构&位置伪类): 根据元素所在的位置定义的伪类。
> A handful of pseudo-classes are structural and position based, in which they are determined based off where elements reside in the document tree.

> 1. ``：first-child``, ``:last-child``, ``:only-child``
>    - ``:first-child`` pseudo-class will select an element if it's the first child within its parent;
>    - ``:last-child`` pseudo-class will select an element if it's the last child within its parent;
>    - ``:only-child`` pseudo-class will select an element if it's the only child within its parent, and it also can be written as ``:first-child:last-child``.
```css
li:first-child {...}
li:last-child {...}
div:only-child {...}
```
```html
<ul>
    <li>This list item will be selected</li>
    <li>
        <div>This div will be selected</div>
    </li>
    <li>
        <div></div>
        <div></div>
    </li>
    <li>This list item will be selected</li>
</ul>
```
> 2. ``:first-of-type``, ``:last-of-type``, ``:only-of-type``
> 上面提到是查找一个父元素下的第一个、最后一个和唯一一个元素的伪类。下面介绍的是查找某一类型的第一、最后和唯一一个元素。
> **简单说一下与上一个伪类的区别: **``A B:first-child``选择的是``A``的第一个元素，且第一个元素为``B``，不然无法应用样式；而``A B:first-of-type``选择的是``A``中第一个``B``类型的元素。
>    - ``:first-of-type`` pseudo-class will select the first element of its type within a parent;
>    - ``:last-of-type`` pseudo-class will select the last element of its type within a parent;
>    - ``:only-of-type`` pseudo-class will select the only element of its type within a parent.
```css
p:first-of-type {...}
p:last-of-type {...}
img:only-of-type {...}
```
```html
<article>
    <h1>...</h1>
    <p>This paragraph will be selected</p>
    <p>...</p>
    <img src="#" /><!-- This image will be selected-->
    <p>This paragraph will be selected</p>
    <h6>...</h6>
</article>
```
> 3. ``:nth-child(n)`` and ``:nth-last-child(n)``
>     - The ``:nth-child(n)`` works from the beginning of the document tree;
>     - The ``:nth-last-child(n)`` works from the end of the document tree.
```css
li:nth-child(3n) {...}
```
```html
<ul>
    <li>...</li>
    <li>...</li>
    <li>This list item will be selected</li>
    <li>...</li>
    <li>...</li>
    <li>This list item will be selected</li>
</ul>
```
> Using a different expression within the ``:nth-child(n)`` pseudo-class will yield a different selection. The ``:li:nth-child(2n+3)`` selector, for example, will identify every second list item starting with the third and then onward. As a result, the list items lines 4 and 6 are selected.
```css
li:nth-child(2n+3) {...}
```
```html
<ul>
    <li>...</li>
    <li>...</li>
    <li>This list item will be selected</li>
    <li></li>
    <li>This list item will be selected</li>
    <li></li>
</ul>
```
> Changing the expressino again, this time with a negative value, yields new selection, Here the ``li:nth-child(-n+4)`` selector is identifying the top four list items, leaving the rest of the list items unselected.
```css
li:nth-child(-n+4) {...}
```
```html
<ul>
    <li>This list item will be selected</li>
    <li>This list item will be selected</li>
    <li>This list item will be selected</li>
    <li>This list item will be selected</li>
    <li>...</li>
    <li>...</li>
</ul>
```
> Adding a negative integer before the ``n`` argument changes the selection again. Here the ``li:nth-child(-2n+5)`` selector identifies every second list item within the first five list items starting with the first list item.
```css
li:nth-child(-2n+5) {...}
```
```html
<ul>
    <li>This list item will be selected</li>
    <li>...</li>
    <li>This list item will be selected</li>
    <li>...</li>
    <li>This list item will be selected</li>
    <li>...</li>
</ul>
```
> Changing from the ``:nth-child(n)`` pseudo-class to the ``:nth-last-child(n)`` pseudo-class switches the direction of counting, with counting starting from the end of the document tree using the ``:nth-last-child(n)`` pseudo-class. The ``li:nth-last-child(3n+2)`` selector, for example, will identify every third list item starting from the second to last item in a list.
```css
li:nth-last-child(3n+2) {...}
```
```html
<ul>
    <li>...</li>
    <li>This list item will be selected</li>
    <li>...</li>
    <li>...</li>
    <li>This list item will be selected</li>
    <li>...</li>
</ul>
```
> 4. ``:nth-of-type(n)`` and ``:nth-last-of-type(n)``:
> Using the ``:nth-of-type(n)`` pseudo-class within the ``p:nth-of-type(3n)`` selector we are able to identify every third paragraph within a parent, regardless of other sibling elements within the parent. 
```css
p:nth-of-type(3n) {...}
```
```html
<article>
    <h1>...</h1>
    <p>...</p>
    <p>...</p>
    <p>This paragraph will be selected</p>
    <h2>...</h2>
    <p>...</p>
    <p>...</p>
    <p>This paragraph will be selected</p>
</article>
```
> Using the ``:nth-last-of-type(n)`` pseudo-class we can write the ``p:nth-last-of-type(2n+1)`` selector which identifies every second paragraph from the end of parent element starting with the last paragraph.
```css
p:nth-last-of-type(2n+1) {...}
```
```html
<article>
    <h1>...</h1>
    <p>...</p>
    <p>This paragraph will be selected</p>
    <p>...</p>
    <h2>...</h2>
    <p>This paragraph will be selected</p>
    <p>...</p>
    <p>This paragraph will be selected</p>
</article>
```

5. **Target Pseudo-class**(目标伪类): ``:target``伪类用于在元素的``ID``属性值与``URI``片段标识符的值匹配时为元素设置样式。
> The ``:target`` pseudo-class is used to style elements when an element's ID attribute value matches that of the URI fragment identifier. The fragment identifier within URI can be recognized by the hash character ``#``, and what directly follows it. the URL ``http://example.com/index.html#hello`` includes the fragment identifier of ``hello``.

> Looking at the code below, if a user would visit a page with the URI fragment identifier of ``#hello``, the section with that same ID attribute value would be stylized accordingly using the ``:target`` pseudo-class. If the URI fragment identifier changes, and matches the ID attribute value of another section, that new section may be stylized using the same selector and pseudo-class from before.

```css
section:target {...}
```
```html
<section id="hello">...</section>
```

6. **Empty Pseudo-class**(空白伪类): 用于选择任何不包含子元素或文本结点的元素。
> The ``:empty`` pseudo-class allows elements that do not contain children or text nodes to be selected.
> Comments, processing instructions, and empty text nodes are not considered chilren and are not treated as such.

```css
div:empty {...}
```
```html
<div>Hello</div>
<div><!-- Coming soon --></div><!-- This div will be selected -->
<div></div><!-- This div will be selected-->
<div> </div>
<div><strong></strong></div>
```

7. **Negation Pseudo-class**(否定伪类): 它使用一个过滤条件作为参数来选择元素。
> The negation pseudo-class ``:not(x)`` is a pseudo-class the takes an argument which is filtered out from the selection to be made.

```css
div:not(.awesome) {...}
```
```html
<div>This div will be selected</div>
<div class="awesome">...</div>
<section>This section will be selected.</section>
<section>This section will be selected.</section>
```

#### Pesudo-classes Overview

|Example|Classification|Explanation|
|:---:|:---:|:---:|
|a:link|Link Pseudo-class|Selects a link that has not been visited by a user|
|a:visited|Link Pseudo-class|Selects a link that has been visited by a user|
|a:hover|Action Pseudo-class|Selects an element when a user has hovered their cursor over it|
|a:active|Action Pseudo-class|Selects an element when a user has engaged it|
|a:focus|Action Pseudo-class|Selects an element when a user has made it their focus point|
|input:enabled|State Pseudo-class|Selects an element in the default enabled state|
|input:disabled|State Pseudo-class|Selects an element in the disabled state, by way of the disabled attribute|
|input:checked|State Pseudo-class|Selects a checkbox or radio button that has been checked|
|input:indeterminate|State Pseudo-class|Selects a checkbox or radio button that neither been checked or unchecked, leaving it in an indeterminate state|
|li:first-child|Structural Pseudo-class|Selects an element that is the first within a parent|
|li:last-child|Structural Pseudo-class|Selects an element that is the last within a parent|
|div:only-child|Structural pseudo-class|Selects an element that is the only element within a parent|
|p:first-of-type|Structural Pseudo-class|Selects an element that is the first of its type within a parent|
|p:last-of-type|Structural Pseudo-class|Selects an element that is the last of its type within a parent|
|img:only-of-type|Structural Pseudo-class|Selects an element that is the oly of its type within a parent|
|li:nth-child(2n+3)|Structural Pseudo-class|Selects an element that matches the given number or expression, counting all elements from the begining of the document tree|
|li:nth-last-child(3n+2)|Structural Pseudo-class|Selects an element that matches the given number or expression, counting all the elements from the end of the document tree|
|li:nth-of-type(3n)|Structural Pseudo-class|Selects an element that matches the given number or expression, counting only elements of its type from the begining of the document tree|
|li:nth-last-of-type(2n+1)|Structural Pseudo-class|Selects an element that matches the given number or expression, counting only elements of its type from the end of the document tree|
|section:target|Target Pseudo-class|Selects an element whose ID attribute value matches that of the URI fragment identifier|
|div:empty|Empty Pseudo-class|Selects an element that does not contain any children or text nodes|
|div:not(.awesome)|Negation Pseudo-class|Selects an element not represented by the stated argument|

### Pseudo Element
伪元素(*Pseudo-elements*)是动态元素，不存在于文档树(*document tree*)中， 使用的时候，可以用选择器为页面中的特定部分添加样式。
> Pseudo-elements are dynamic elements that don't exist in the document tree, and when used within selectors these pseudo-elements allow unique parts of the page to be stylized.
> One important point to note, only one pseudo-element may be used within a selector at a given time.


**Pseudo-elements Overview**

|Example|Classification|Explanation|
|:----:|:----:|:----:|
|alpha:first-letter|Textual Pseudo-element|Selects the first letter of text within an element|
|.brava:first-line|Textual Pseudo-element|Selects the first line of text within an element|
|div:before|Generated Content|Creates a pseudo-element inside the selected element at the begining|
|div:after|Generated Content|Creates a pseudo-element inside the selected element at the end|
|::selection|Fragment Pseudo-element|Selects the part of a document which has been selected, or highlighted, by users' actions|
