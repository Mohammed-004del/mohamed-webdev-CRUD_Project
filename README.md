# 📦 CRUDS Product Management System

![CRUDS Banner](images/)

## 📖 About the Project

A powerful **CRUDS (Create, Read, Update, Delete, Search)** system for managing products with an intuitive interface. Built with vanilla JavaScript and local storage for persistent data management. Perfect for inventory management, product catalogs, or learning CRUD operations.

---

## 🌐 Live Demo

🔗 [View Demo](#)

---

## 🛠️ Tech Stack

![HTML5](https://img.shields.io/badge/-HTML5-E34F26?logo=html5&logoColor=white&style=for-the-badge)
![CSS3](https://img.shields.io/badge/-CSS3-1572B6?logo=css3&logoColor=white&style=for-the-badge)
![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black&style=for-the-badge)
![LocalStorage](https://img.shields.io/badge/-LocalStorage-FF6B6B?logo=html5&logoColor=white&style=for-the-badge)

---

## ✨ Features

- ✅ **Create Products**: Add single or multiple products at once
- ✅ **Real-time Total Calculation**: Auto-calculate total price with taxes, ads, and discounts
- ✅ **Update Products**: Edit existing product information
- ✅ **Delete Products**: Remove individual products or delete all at once
- ✅ **Smart Search**: Search products by title or category
- ✅ **Local Storage**: Data persists across browser sessions
- ✅ **Responsive Design**: Works on all devices
- ✅ **Input Validation**: Ensures data quality before submission
- ✅ **Bulk Operations**: Create up to 100 products simultaneously

---

## 📸 Screenshots

### Main Interface
![Main Screen](screenshot_main.png)

### Product Management
![Product List](screenshot_products.png)

### Search Functionality
![Search Feature](screenshot_search.png)

---

## 🎯 How to Use

### Adding a Product

1. **Fill in Product Details**:
   - **Title**: Product name
   - **Price**: Base price
   - **Taxes**: Tax amount
   - **Ads**: Advertising costs
   - **Discount**: Discount amount
   - **Count**: Number of products to create (1-99)
   - **Category**: Product category

2. **View Total Price**: The system automatically calculates the total price
   ```
   Total = (Price + Taxes + Ads) - Discount
   ```

3. **Click "Create"**: Product(s) will be added to the table

### Updating a Product

1. Click the **"Update"** button on any product row
2. Modify the product details in the input fields
3. Click **"Update"** button to save changes

### Deleting Products

- **Single Delete**: Click "Delete" button on specific product
- **Delete All**: Click "Delete All" button to remove all products

### Searching Products

1. Click **"Search by Title"** or **"Search by Category"**
2. Type in the search box
3. Results appear in real-time

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/Mohammed-004del/mohamed-webdev-CRUD_Project.git
```

Navigate to the project directory:

```bash
cd cruds-product-management
```

Open `index.html` in your browser:

```bash
# On macOS
open index.html

# On Linux
xdg-open index.html

# On Windows
start index.html
```

Or use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server)
npx http-server
```

Then open `http://localhost:8000` in your browser.

---

## 📁 Project Structure

```
cruds-system/
├── index.html          # Main HTML structure
├── style.css           # Styling and animations
├── script.js           # JavaScript logic and CRUD operations
```

---

## 🔧 Code Highlights

### Dynamic Total Calculation
```javascript
function gettotal(){
    if(price.value != ''){
        let result = (+price.value + +taxes.value + +ads.value) - +discount.value;
        Total.innerHTML = result;
        Total.style.background = 'green';
    }
}
```

### Local Storage Integration
```javascript
// Save data
localStorage.setItem('product', JSON.stringify(arrpro));

// Retrieve data
if(localStorage.product != null){
    arrpro = JSON.parse(localStorage.product);
}
```

### Bulk Product Creation
```javascript
if(newpro.count > 1){
    for(let i = 0; i < newpro.count; i++){
        arrpro.push(newpro);
    }
}
```

### Smart Search System
```javascript
function search(value){
    if(searchmood == 'title'){
        if(arrpro[i].title.includes(value.toLowerCase())){
            // Display matching products
        }
    }
}
```

---

## 💡 Key Concepts Demonstrated

- **CRUD Operations**: Complete Create, Read, Update, Delete functionality
- **DOM Manipulation**: Dynamic table generation and updates
- **Local Storage API**: Persistent data storage in browser
- **Event Handling**: Interactive user interface
- **Data Validation**: Input checking before operations
- **Array Methods**: push, splice, includes for data management
- **String Methods**: toLowerCase for case-insensitive search
- **Template Literals**: Dynamic HTML generation

---

## 🚀 Future Enhancements

- Add product images
- Export data to CSV/Excel
- Import products from file
- Sort products by different fields
- Add product categories dropdown
- Implement data backup/restore
- Add product barcode/SKU
- Include stock quantity tracking
- Multi-language support
- Dark/Light theme toggle
- Print product list
- Advanced filters (price range, date added)

---

## 📝 Input Validation Rules

- **Title**: Required, cannot be empty
- **Price**: Required, must be a number
- **Category**: Required, cannot be empty
- **Count**: Must be less than 100
- **Discount**: Optional, defaults to 0 if empty
- **Total**: Auto-calculated, cannot be edited manually

---

## 🎨 Color Scheme

- **Background**: `#222` (Dark Gray)
- **Input Fields**: `#111` (Darker Gray)
- **Primary Button**: `#4b0069` (Purple)
- **Total (Active)**: `green`
- **Total (Inactive)**: `#690000` (Dark Red)

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 👨‍💻 Author

**Mohammed Mahmood Hamed**

- GitHub: [@Mohammed-004del](https://github.com/Mohammed-004del)
- LinkedIn: [Mohammed Mahmood]([https://linkedin.com/in/yourprofile](https://www.linkedin.com/in/mohammed-mahmood-7327b0301/)

---

## 📧 Contact

Have questions or suggestions? Feel free to reach out!

- Email: MohammedMahmoodHamed004@gmail.com

---

## 🙏 Acknowledgments

- Inspired by real-world inventory management systems
- Built as part of JavaScript learning journey
- Special thanks to the web development community
