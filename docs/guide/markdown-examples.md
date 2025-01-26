{
    "workbench.editor.languageDetection": false,
    "editor.wordBreak": "keepAll",
    "http.proxy": "http://127.0.0.1:33210",
    "http.proxyStrictSSL": false, // 如果代理服务器使用的是自签名证书，可将此值设为 false
    "http.proxyAuthorization": null,
    "http.electronFetch": true,
    "http.experimental.systemCertificatesV2": true,
    "workbench.iconTheme": "emoji-file-icons",
    "workbench.productIconTheme": "emoji-product-icons-fun",
    "workbench.colorTheme": "GitHub Dark Default",
    "git.autofetch": true,
    "redhat.telemetry.enabled": true,
    "git.confirmSync": false // 如果代理需要身份验证，可以设置为 "Basic <Base64 编码的用户名：密码>"
}*Input**

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
