# Markdown Extension Examples

This page demonstrates some of the built-in markdown extensions provided by VitePress.

## Markdown 语言

[Markdown-Wikipedia](https://zh.m.wikipedia.org/zh-cn/Markdown)<br>
[Markdown 基本语法](https://markdown.com.cn/basic-syntax/)<br>
![图片测试](https://szzxshumei.com/wp-content/uploads/2025/01/00000fca-a799-729d-4962-80494265366d.jpg)

## Syntax Highlighting

VitePress provides Syntax Highlighting powered by [Shiki](https://github.com/shikijs/shiki), with additional features like line-highlighting:

**Input**

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## Custom Containers

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).


[defhttps://szzxshumei.com/wp-content/uploads/2025/01/00000fca-a799-729d-4962-80494265366d.jpg]: https://szzxshumei.com/wp-content/uploads/2025/01/00000fca-a799-729d-4962-80494265366d.jpg