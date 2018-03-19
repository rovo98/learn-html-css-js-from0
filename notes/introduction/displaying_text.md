---
author: rovo98
description: notes.
date: 2018.3.19
---

# Displaying Test - 显示文本

当我们想用HTML来显示文本时，我们可能会用到一个\<p>或者\<span>标签。

- 使用\<p>标签包含一段纯文本;
- \<span>包含短文本或其他HTML。
   它们用于分隔与其他内容位于同一行的小部分内容。
   
## 用例

```html
<div>
    <h1>Technology</h1>
</div>
<div>
    <p><span>Self-driving cars</span>
    are anticipated to replace up to 2
    million jobs over the next two decades.</p>
</div>
```

在这个例子中，\<span>标签将"Self-driving cars"和段落中的其他文本
分了出来。

## 为什么使用\<span>?
当我们想要定位与内联或与其他文本位于同一行的特定内容片段时，最好使用<span>元素。
如果想将内容分成块，最好使用<div>