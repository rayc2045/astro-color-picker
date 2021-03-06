# Astro Color Picker｜使用框架 Astro 打造的色票複製工具

![astro-colors.netlify.app](https://cdn.dribbble.com/users/3800131/screenshots/17078912/media/2e27671e28657e221e755806a709f630.png)

[> Astro Color Picker](https://astro-colors.netlify.app/)

### 簡介
去年看到 Astro 剛發布時所宣稱的「用較少的 JavaScript 打造極速網站」就對這樣的框架產生興趣，那時雖然也試玩了一下，不過因為遇到一些開發初期的 bug 放棄研究。直到近期拿過去使用 petite-vue 開發的專案 — [HTML Reserved Colors](https://github.com/rayc2045/html-reserved-colors) 來透過 Astro 重新打造外觀和功能完全一樣的姐妹網站，體驗到提升網站載入速度和 SEO 效果的靜態網頁生成，也在實作上發現一些值得注意的地方：(1) `<script>` 中 fetch 資料時不可使用本地路徑，必須使用網址；(2) Astro 預設在打包時會清除 JavaScript 程式碼，如果想要元件裡的 JS 一同被打包，就要在引入時加入 Astro 的標籤，如 `<MyComponent client:visible />`，詳細說明見 [Partial Hydration in Astro](https://docs.astro.build/en/core-concepts/component-hydration/)；(3) 如果想要讓頁面中的  JavaScript 程式碼被打包，就要加上 `hoist` tag，也就是 `<script hoist></script>`，但是在開發時加入 `hoist` tag 會導致熱重載 (hot-reload) 中斷，所以我的作法是開發時先移除標籤，待程式碼打包時再利用 git record 的變更提示來提醒自己加上，目前算是比較麻煩的地方。總體而言，使用 Astro 框架開發的過程還算滿意，將 JavaScript 產生的元件打包成 HTML String、以及對 Astro 意圖[整合所有主流前端框架](https://docs.astro.build/en/core-concepts/framework-components/)的作法感到新奇，是一個會想繼續使用的工具。

### 外觀與互動設計
- 見原專案：[HTML Reserved Colors](https://github.com/rayc2045/html-reserved-colors)

### 開發紀錄
- 將 `<head>` 與色票卡片做成元件載入
- 使用 Sass 做出在頁面引入的 [全域樣式](https://github.com/rayc2045/astro-color-picker/blob/main/src/styles/global.sass) 和元件中配合使用的 [設定樣式](https://github.com/rayc2045/astro-color-picker/blob/main/src/styles/_settings.sass)
- 將通用型程式碼 ([utils.js](https://github.com/rayc2045/astro-color-picker/blob/main/src/scripts/utils.js)) 與專案用程式碼進行拆分，需要時再模組化引入做使用 (module import)
- 以原生 DOM 操作實現透過網址查詢參數 (Query String) [過濾色票卡片的功能](https://astro-colors.netlify.app/?colors=darkorange+indianred+sandybrown+seagreen+darkseagreen+lightslategray)
- 專案打包後使用 VS Code 套件 [MinifyAll](https://marketplace.visualstudio.com/items?itemName=josee9988.minifyall) 進一步壓縮 HTML 檔案
- 其他見原專案：[HTML Reserved Colors](https://github.com/rayc2045/html-reserved-colors)

### Commands

| Command          | Action                                       |
|:---------------- |:-------------------------------------------- |
| `pnpm i`         | Installs dependencies                        |
| `pnpm dev`       | Starts local dev server at `localhost:3000`  |
| `pnpm build`     | Build the production site to `./dist/`       |
| `pnpm preview`   | Preview the build locally, before deploying  |
| `pnpm product`   | Build the production site, and preview it    |
