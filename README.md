# VibeLink 藝感售票平台 - 前台

## 沉浸式藝術與風格導覽電商售票網站(TS)

## 環境配置 (Tech Stack)

- **核心框架**：Vue 3 (Composition API / `<script setup>`)
- **建構工具**：Vite
- **路由管理**：Vue Router (實作前台首頁、商品分頁、購物車及結帳成功頁)
- **狀態管理 / 異步處理**：Axios (對接外部 API 進行資料請求)
- **樣式與排版**：Bootstrap 5 / Tailwind CSS
- **語法支援**：TypeScript (TS)

## Project Setup

### 安裝依賴套件

```sh
npm install
```

---

## API 資源與文件說明

在開發與對接測試時，請務必參考以下官方資源：

- **課程 API 文件 (Swagger)**：[https://hexschool.github.io/ec-courses-api-swaggerDoc/#/](https://hexschool.github.io/ec-courses-api-swaggerDoc/#/) — 用於查詢前台商品列表、購物車增刪查改、訂單送出，以及後台產品管理等 API 規格。
- **API 申請網址**：[https://ec-course-api.hexschool.io/](https://ec-course-api.hexschool.io/) — 用於申請專屬的 `API_PATH` 與管理管理者權限。

---

## 專案架構

- **首頁視覺呈現**：包含主打活動 Banner 區塊、本月精選體驗（三大核心活動卡片）、智能策展引導（情感篩選器）與 B2B 企業方案說明。
- **動態分類篩選**：將商品劃分類別，利用 Vue `computed` 實作無重新整理的切換標籤。
- **購物車與狀態暫存**：結合 API 與 `LocalStorage` 確保使用者在重新整理頁面後，購物車內容與暫存狀態不遺失。
- **表單驗證與結帳**：實作完整的結帳表單驗證（Email、電話、地址格式驗證），並於訂單成立後導向 `CheckoutSuccessView.vue` 頁面。
