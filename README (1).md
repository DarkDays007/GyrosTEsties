# 🥙 Ιστοσελίδα Γυράδικου

Μια σύγχρονη, responsive ιστοσελίδα για γυράδικο με όλα τα απαραίτητα χαρακτηριστικά.

## 📁 Περιεχόμενα Αρχείων

- **index.html** - Το κύριο HTML αρχείο με όλη τη δομή της σελίδας
- **styles.css** - Όλα τα CSS styles, συμπεριλαμβανομένου του responsive design
- **script.js** - JavaScript για διαδραστικότητα (hamburger menu, smooth scrolling, κλπ.)

## ✨ Χαρακτηριστικά

### 🎨 Design
- Σύγχρονο και καθαρό design
- Ζεστά χρώματα που ταιριάζουν σε εστιατόριο
- Animations και transitions
- Professional typography με Google Fonts

### 📱 Responsive Design
- Λειτουργεί τέλεια σε desktop, tablet, και mobile
- Hamburger menu για κινητές συσκευές
- Adaptive layouts για όλα τα μεγέθη οθόνης
- Touch-friendly για κινητά

### 🧭 Sections

1. **Hero Section**
   - Εντυπωσιακή εισαγωγική εικόνα
   - Call-to-action button
   - Smooth scroll indicator

2. **About Section**
   - Πληροφορίες για το κατάστημα
   - Features με icons
   - Εικόνα προϊόντος

3. **Menu Section**
   - Αναλυτικό μενού με τιμές
   - Κατηγοριοποιημένα προϊόντα:
     * Γύρος
     * Σουβλάκια & Σχάρας
     * Σαλάτες & Ορεκτικά
     * Ποτά & Αναψυκτικά
   - Featured items με ειδική επισήμανση

4. **Location Section**
   - Ενσωματωμένος Google Maps
   - Διεύθυνση με icon
   - Ώρες λειτουργίας
   - Τηλέφωνο επικοινωνίας

5. **Contact Section**
   - Φόρμα επικοινωνίας
   - Στοιχεία επικοινωνίας
   - Social media links

6. **Footer**
   - Πληροφορίες επιχείρησης
   - Quick links
   - Ωράριο
   - Social media

### 🎯 Λειτουργίες JavaScript

- **Hamburger Menu** - Responsive navigation για mobile
- **Smooth Scrolling** - Ομαλή μετάβαση μεταξύ sections
- **Active Navigation** - Αυτόματη ενημέρωση του active link
- **Scroll to Top Button** - Εμφανίζεται όταν κάνεις scroll κάτω
- **Form Validation** - Έλεγχος στοιχείων φόρμας
- **Notification System** - Όμορφα μηνύματα επιτυχίας/σφάλματος
- **Animations** - Smooth animations με Intersection Observer
- **Keyboard Navigation** - ESC για κλείσιμο του menu

## 🚀 Εγκατάσταση

### Βήμα 1: Λήψη Αρχείων
Κατέβασε όλα τα αρχεία (index.html, styles.css, script.js)

### Βήμα 2: Οργάνωση
Τοποθέτησε όλα τα αρχεία στον ίδιο φάκελο:
```
my-gyradiko/
├── index.html
├── styles.css
└── script.js
```

### Βήμα 3: Άνοιγμα
Απλά άνοιξε το `index.html` σε οποιονδήποτε browser!

## 🔧 Προσαρμογή

### Αλλαγή Χρωμάτων
Στο `styles.css`, γραμμές 10-18, βρίσκεις τα CSS variables:
```css
:root {
    --primary-color: #e67e22;    /* Κύριο χρώμα */
    --primary-dark: #d35400;     /* Σκούρο κύριο */
    --secondary-color: #c0392b;  /* Δευτερεύον */
    /* ... */
}
```

### Αλλαγή Περιεχομένου
- **Λογότυπο**: Γραμμή 29-32 στο `index.html`
- **Μενού Items**: Sections με class `.menu-item`
- **Τιμές**: Γραμμές με class `.item-price`
- **Διεύθυνση**: Γραμμή 233
- **Τηλέφωνο**: Γραμμή 243
- **Ωράριο**: Γραμμές 249-251

### Αλλαγή Google Maps
1. Πήγαινε στο [Google Maps](https://www.google.com/maps)
2. Βρες την τοποθεσία σου
3. Κλικ "Share" → "Embed a map"
4. Αντικατέστησε το iframe στη γραμμή 269

### Αλλαγή Εικόνων
Οι εικόνες από το Unsplash μπορούν να αντικατασταθούν με δικές σου:
- Hero background: Γραμμή 66
- About section: Γραμμή 113

Για δικές σου εικόνες:
1. Βάλε τις σε έναν φάκελο `images/`
2. Άλλαξε τα URLs σε: `url('images/your-image.jpg')`

## 📝 Προσθήκη Social Media

Στο `index.html`, γραμμές 285-287 και footer (γραμμές 323-325):
```html
<a href="https://facebook.com/your-page" target="_blank">
    <i class="fab fa-facebook-f"></i>
</a>
```

## 🌐 Online Hosting

### Δωρεάν Options:

1. **GitHub Pages**
   - Δωρεάν hosting
   - Ανέβασε τα αρχεία σε GitHub repository
   - Ενεργοποίησε το GitHub Pages

2. **Netlify**
   - Drag & drop τον φάκελο
   - Αυτόματο SSL
   - Δωρεάν subdomain

3. **Vercel**
   - Παρόμοιο με Netlify
   - Εξαιρετική performance

## 📱 Testing

Δοκίμασε την ιστοσελίδα σε:
- ✅ Chrome/Edge
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers
- ✅ Tablet view

## 🎨 Fonts & Icons

- **Fonts**: Google Fonts (Poppins, Playfair Display)
- **Icons**: Font Awesome 6.4.0 (δωρεάν CDN)

## ⚙️ Browser Support

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Internet Explorer: ❌ Not supported (χρησιμοποιεί modern CSS)

## 🔄 Updates

### Προσθήκη Νέου Menu Item:
```html
<div class="menu-item">
    <div class="menu-item-header">
        <h4 class="item-name">Όνομα Προϊόντος</h4>
        <span class="item-price">5.00€</span>
    </div>
    <p class="item-description">Περιγραφή του προϊόντος</p>
</div>
```

### Προσθήκη Featured Badge:
```html
<div class="menu-item featured">
    <div class="menu-item-header">
        <h4 class="item-name">Όνομα <span class="badge">Δημοφιλές</span></h4>
        ...
```

## 💡 Tips

1. **Βελτιστοποίηση Εικόνων**
   - Χρησιμοποίησε compressed images
   - Recommended: WebP format για καλύτερη performance

2. **SEO**
   - Άλλαξε το `<title>` και `<meta description>`
   - Πρόσθεσε keywords
   - Βάλε Google Analytics

3. **Performance**
   - Τα αρχεία είναι optimized
   - Lazy loading για images
   - Minimized animations σε mobile

4. **Accessibility**
   - Χρησιμοποιεί semantic HTML
   - Keyboard navigation
   - Screen reader friendly

## 📞 Support

Για βοήθεια με την προσαρμογή:
- Άλλαξε τα βασικά στοιχεία (τηλέφωνο, διεύθυνση, email)
- Customize colors και fonts
- Πρόσθεσε/αφαίρεσε sections

## 📄 License

Free to use and modify για το δικό σου έργο!

## 🎉 Χαρακτηριστικά Προς Προσθήκη (Προαιρετικά)

- 🛒 Online παραγγελίες
- 💳 Payment integration
- 📧 Newsletter signup
- 🌙 Dark mode toggle
- 🌍 Multi-language support
- ⭐ Reviews section
- 📸 Gallery με photos
- 🎁 Loyalty program info

---

**Καλή επιτυχία με την ιστοσελίδα σου!** 🚀

Αν χρειαστείς βοήθεια με την προσαρμογή, μη διστάσεις να ρωτήσεις!
