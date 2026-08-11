# 见地 Insights

《经邦论策》的独立访谈存档与主持人写作站点。当前为内部测试版，仅收入白艳访谈三集，所有页面均设置 `noindex`。

## 本地运行

```bash
npm ci
npm run dev
```

## 验证与部署

```bash
npm run check
npm run build
npm run deploy
```

首次部署前运行 `npx wrangler login`。正式域名只需修改 `src/site-config.mjs`。

## 内容位置

- 期次：`src/data/episodes/<slug>.md`
- 分集：`src/data/parts/<slug>-<part>.md`

正文使用系统中文字体，不引入完整 CJK webfont。三篇主持人手记仍为初稿框架，发布前必须由主持人本人改写。
