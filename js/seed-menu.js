import { db } from './firebase-config.js';
import { collection, addDoc, getDocs, deleteDoc, query } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";

const DUMMY_MENU_ITEMS = [
    {
        name: "Hainanese Chicken Rice",
        price: 5.50,
        category: "Main Course",
        description: "Poached chicken served with seasoned rice, chili garlic sauce, and cucumber garnish.",
        ingredients: "Chicken, Rice, Garlic, Chili, Ginger",
        dietary: "Halal",
        imageUrl: "../images/hainanesechickenrice.jpg"
    },
    {
        name: "Laksa",
        price: 6.00,
        category: "Noodles",
        description: "Spicy coconut noodle soup with prawns, fish cake, and cockles.",
        ingredients: "Noodles, Coconut Milk, Prawns, Fish Cake, Chili Paste",
        dietary: "Spicy",
        imageUrl: "../images/laksa.jpg"
    },
    {
        name: "Regular Hokkien Mee",
        price: 5.00,
        category: "Noodles",
        description: "Stir-fried flat rice noodles with prawns, bloody cockles, Chinese lap cheong, and bean sprouts.",
        ingredients: "Flat Noodles, Prawns, Cockles, Chinese Sausage, Egg",
        dietary: "Contains Pork",
        imageUrl: "../images/regularhokkienmie.png"
    },
    {
        name: "Spicy Hokkien Mee",
        price: 5.50,
        category: "Noodles",
        description: "Spicy version of Hokkien Mee with extra homemade chili paste.",
        ingredients: "Flat Noodles, Prawns, Cockles, Chili Paste",
        dietary: "Spicy, Contains Pork",
        imageUrl: "../images/spicyhokkienmie.png"
    },
    {
        name: "Char Kway Teow",
        price: 5.50,
        category: "Noodles",
        description: "Smoky stir-fried noodles with cockles, prawns, and chinese sausage.",
        ingredients: "Flat Noodles, Prawns, Cockles, Chinese Sausage",
        dietary: "Contains Pork",
        imageUrl: "../images/carkwayteow.jpg"
    },
    {
        name: "Satay (10 sticks)",
        price: 8.00,
        category: "Appetizer",
        description: "Skewered grilled meat served with peanut sauce, cucumber, and onions.",
        ingredients: "Chicken/Beef/Mutton, Peanut Sauce",
        dietary: "Halal",
        imageUrl: "../images/satay.jpg"
    },
    {
        name: "Roti Prata",
        price: 1.50,
        category: "Snacks",
        description: "South Indian flatbread made by frying stretched dough flavored with ghee.",
        ingredients: "Flour, Ghee, Egg (optional)",
        dietary: "Vegetarian",
        imageUrl: "../images/roti-prata.jpg"
    },
    {
        name: "Ice Kachang",
        price: 3.50,
        category: "Dessert",
        description: "Shaved ice with red beans, sweet corn, grass jelly, and colorful syrups.",
        ingredients: "Ice, Red Beans, Corn, Jelly, Syrup, Condensed Milk",
        dietary: "Vegetarian",
        imageUrl: "../images/icekachang.jpg"
    },
    {
        name: "Kopi O",
        price: 1.20,
        category: "Beverage",
        description: "Traditional black coffee with sugar.",
        ingredients: "Coffee Beans, Sugar",
        dietary: "Vegetarian",
        imageUrl: "../images/kopio.jpg"
    },
    {
        name: "Teh Tarik",
        price: 1.50,
        category: "Beverage",
        description: "Pulled milk tea, frothy and sweet.",
        ingredients: "Tea Dust, Condensed Milk",
        dietary: "Vegetarian",
        imageUrl: "../images/teh-tarik.jpg"
    },
    {
        name: "Fried Tofu",
        price: 3.00,
        category: "Snacks",
        description: "Crispy fried tofu served with sweet chili sauce.",
        ingredients: "Tofu, Oil, Chili Sauce",
        dietary: "Vegetarian",
        imageUrl: "../images/friedtofu.png"
    },
    {
        name: "Oyster Omelet",
        price: 8.00,
        category: "Main Course",
        description: "Savory omelet with fresh oysters and starch.",
        ingredients: "Eggs, Oysters, Starch, Cilantro",
        dietary: "Seafood",
        imageUrl: "../images/oysterommelete.png"
    },
    {
        name: "Spring Rolls",
        price: 3.50,
        category: "Snacks",
        description: "Crispy rolls filled with a savory mix of vegetables.",
        ingredients: "Cabbage, Carrot, Pastry Skin",
        dietary: "Vegetarian",
        imageUrl: "../images/springrolls.png"
    }
];

export async function seedMenuData() {
    try {
        console.log("Starting menu reset...");

        // --- 1. Clear menu_items ---
        const qItems = query(collection(db, "menu_items"));
        const snapshotItems = await getDocs(qItems);
        if (!snapshotItems.empty) {
            console.log(`Deleting ${snapshotItems.size} existing items...`);
            await Promise.all(snapshotItems.docs.map(doc => deleteDoc(doc.ref)));
        }

        // --- 2. Clear menu_groups ---
        const qGroups = query(collection(db, "menu_groups"));
        const snapshotGroups = await getDocs(qGroups);
        if (!snapshotGroups.empty) {
            console.log(`Deleting ${snapshotGroups.size} existing groups...`);
            await Promise.all(snapshotGroups.docs.map(doc => deleteDoc(doc.ref)));
        }

        // --- 3. Add new Items ---
        console.log("Adding new Singaporean items...");
        await Promise.all(DUMMY_MENU_ITEMS.map(item => addDoc(collection(db, "menu_items"), item)));

        // --- 4. Add Groups (Unique Categories) ---
        console.log("Adding menu groups...");
        const uniqueCategories = [...new Set(DUMMY_MENU_ITEMS.map(item => item.category))];
        await Promise.all(uniqueCategories.map(category => addDoc(collection(db, "menu_groups"), {
            name: category,
            created_at: new Date()
        })));

        console.log("Menu & Groups seeded successfully!");
        alert("Success! Menu and Groups have been reset to Singaporean Cuisine (SGD).");
        window.location.reload();

    } catch (e) {
        console.error("Error seeding menu: ", e);
        alert("Error resetting menu: " + e.message);
    }
}
