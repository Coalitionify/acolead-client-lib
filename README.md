# acolead-client-lib

This guide will help you integrate the AcoLead SDK into your website or web application.

---
##  Step 1: Add Script in `index.html`

First, download or copy the `dist\acolead.iife.js` file from this repository.

Place it in the root directory of your project (or an appropriate subfolder like `js/`).

Then, include the AcoLead SDK in your HTML by adding the following line just before the closing `</body>` tag in your `index.html`:

```html
<script src="./acolead.iife.js"></script>
```
## Step 2: Add the Submit Function

In your enquiry function (e.g., when a form is submitted), use the following code to send user details to AcoLead:

```javascript
const result = await window.AcoLead.submitEnquiry(
    "<clientId>", // Replace this with your actual clientId
    "<name>",
    "<phoneNumber>",
    "<requirement>",
    "<email>",
    "<companyName>"
);
```

## Note
To get your `clientId`, follow these steps:
1. Log in to [app.crm.acolead.com/](https://app.crm.acolead.com/)
2. Navigate to **Settings > SDK Integration**
3. Copy your **Client ID** from there and replace `<clientId>` in the code above.