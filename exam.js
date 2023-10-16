// Check if the user is already logged in
if (localStorage.getItem('loggedIn') === 'true') {
    showOrderPage();
} else {
    showLoginPage();
}

// Event listener for the login form
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === password) {
        localStorage.setItem('loggedIn', 'true');
        showOrderPage();
    } else {
        alert('Please enter valid credentials!');
    }
});

// Function to show the login page
function showLoginPage() {
    document.getElementById('login-page').style.display = 'block';
    document.getElementById('order-page').style.display = 'none';
}

// Function to show the order listing page
function showOrderPage() {
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('order-page').style.display = 'block';
}




// JavaScript for the Order Listing Page
fetch('https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders')
    .then(response => response.json())
    .then(data => {
        // Process and display data on the page
        const orderListing = document.getElementById('order-listing');
        data.forEach(order => {
            const orderItem = document.createElement('div');
            orderItem.textContent = `Order ID: ${order.id}, Customer: ${order.customer}, Amount: $${order.amount}`;
            orderListing.appendChild(orderItem);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });

const order = [
    { id: "714-69-5617", customerName: "Sally Whebell", orderDate: "07-Aug-2020", orderTime: "2:29 AM", amount: 634.2, orderStatus: "Delivered" },
    { id: "752-42-3160", customerName: "Emmery Grizard", orderDate: "11-Mar-2020", orderTime: "3:14 PM", amount: 518.23, orderStatus: "New" },
    { id: "671-99-4274", customerName: "Alano Carnaman", orderDate: "09-Oct-2020", orderTime: "11:41 AM", amount: 400.34, orderStatus: "New" },
    { id: "359-13-4724", customerName: "Huey Coombes", orderDate: "16-Nov-2020", orderTime: "6:35 PM", amount: 559.06, orderStatus: "Delivered" },
    { id: "302-50-0415", customerName: "Rex Pilsworth", orderDate: "26-Feb-2020", orderTime: "2:02 PM", amount: 347.03, orderStatus: "Delivered" },
    { id: "332-24-5988", customerName: "Lou Udale", orderDate: "25-Jun-2020", orderTime: "11:41 PM", amount: 645.82, orderStatus: "InTransit" },
    { id: "239-32-6080", customerName: "Penni Blight", orderDate: "30-May-2020", orderTime: "8:15 PM", amount: 472.53, orderStatus: "Packed" },
    { id: "579-80-0751", customerName: "Elberta Farress", orderDate: "25-Jun-2020", orderTime: "4:42 PM", amount: 774.63, orderStatus: "InTransit" },
    { id: "494-62-5297", customerName: "Danya Regan", orderDate: "27-May-2020", orderTime: "6:33 AM", amount: 785.02, orderStatus: "New" },
    { id: "373-65-1146", customerName: "Alexandros Fiddyment", orderDate: "15-Mar-2020", orderTime: "12:42 AM", amount: 461.99, orderStatus: "Packed" },
    { id: "649-95-4216", customerName: "Nissy Dalglish", orderDate: "22-Dec-2019", orderTime: "5:08 AM", amount: 252.63, orderStatus: "InTransit" }
];

// Select the tbody element where you want to insert data
const tbody = document.querySelector('tbody');

// Loop through the orders and create table rows
// Loop through the orders and create table rows
order.forEach(order => {
    const row = document.createElement('tr');

    // Create table cells and populate them
    const idCellOrder = document.createElement('td');
    idCellOrder.textContent = order.id;
    const customerCellOrder = document.createElement('td');
    customerCellOrder.textContent = order.customerName;
    const dateCellOrder = document.createElement('td');
    dateCellOrder.textContent = order.orderDate;
    const amountCellOrder = document.createElement('td');
    amountCellOrder.textContent = `$${order.amount.toFixed(2)}`;
    const statusCellOrder = document.createElement('td');
    statusCellOrder.textContent = order.orderStatus;

    // Append the cells to the row
    row.appendChild(idCellOrder);
    row.appendChild(customerCellOrder);
    row.appendChild(dateCellOrder);
    row.appendChild(amountCellOrder);
    row.appendChild(statusCellOrder);

    // Append the row to the correct tbody
    tbody.appendChild(row);
});


// Select the Order link and the Order Page
const orderLink = document.getElementById('order-link');
const orderPage = document.getElementById('order-page');

// Add a click event listener to the Order link
orderLink.addEventListener('click', function () {
    // Toggle the display property of the Order Page
    if (orderPage.style.display === 'none') {
        orderPage.style.display = 'block';
    } else {
        orderPage.style.display = 'none';
    }
});






const products = [
    {id:"56104-020",medicineName:"Miconazole Nitrate",medicineBrand:"Premier Brands of America Inc.",expiryDate:"14-Aug-2012",unitPrice:993.01,prescriptionRequired:false,stock:725},
    {id:"0268-1239",medicineName:"CHENOPODIUM ALBUM POLLEN",medicineBrand:"ALK-Abello, Inc.",expiryDate:"24-Jul-2029",unitPrice:632.22,prescriptionRequired:false,stock:917},
    {id:"17478-741",medicineName:"Vancomycin Hydrochloride",medicineBrand:"Akorn, Inc.",expiryDate:"23-Feb-2015",unitPrice:814.3,prescriptionRequired:true,stock:666},
    {id:"58118-9931","medicineName":"Neomycin and Polymyxin B Sulfates and Hydrocortisone","medicineBrand":"Clinical Solutions Wholesale","expiryDate":"05-Jun-2027","unitPrice":717.73,"prescriptionRequired":true,"stock":161},{"id":"51345-119","medicineName":"Pretty in Paris Kit","medicineBrand":"Advanced Beauty Systems, Inc.","expiryDate":"16-Jun-2025","unitPrice":140.15,"prescriptionRequired":true,"stock":679},{"id":"43419-714","medicineName":"Sulwhasoo Lumitouch Multi-Base","medicineBrand":"AMOREPACIFIC","expiryDate":"19-Nov-2016","unitPrice":559.2,"prescriptionRequired":false,"stock":711},{"id":"48951-2044","medicineName":"Berberis Oxalis","medicineBrand":"Uriel Pharmacy Inc.","expiryDate":"28-Jul-2013","unitPrice":299.93,"prescriptionRequired":true,"stock":276},{"id":"29500-9077","medicineName":"Personal Care Antibacterial Hand - Raspberry","medicineBrand":"Personal Care Products, LLC","expiryDate":"27-Jun-2027","unitPrice":233.95,"prescriptionRequired":false,"stock":794},{"id":"51655-391","medicineName":"Isoniazid","medicineBrand":"Northwind Pharmaceuticals, LLC","expiryDate":"26-Jul-2017","unitPrice":222.87,"prescriptionRequired":false,"stock":357},{"id":"37000-394","medicineName":"Old Spice High Endurance","medicineBrand":"Procter & Gamble Manufacturing Company","expiryDate":"09-May-2022","unitPrice":515.53,"prescriptionRequired":false,"stock":683},{"id":"50419-252","medicineName":"Adempas","medicineBrand":"Bayer HealthCare Pharmaceuticals Inc.","expiryDate":"31-Aug-2027","unitPrice":911.3,"prescriptionRequired":false,"stock":755},{"id":"0024-0335","medicineName":"Demerol","medicineBrand":"sanofi-aventis U.S. LLC","expiryDate":"12-Sep-2026","unitPrice":316.76,"prescriptionRequired":false,"stock":86},{"id":"50436-4841","medicineName":"CYCLOBENZAPRINE HYROCHLORIDE","medicineBrand":"Unit Dose Services","expiryDate":"23-Aug-2015","unitPrice":440.16,"prescriptionRequired":false,"stock":169},{"id":"51345-055","medicineName":"Bodycology","medicineBrand":"Advanced Beauty Systems, Inc.","expiryDate":"05-Apr-2023","unitPrice":809.08,"prescriptionRequired":false,"stock":847},{"id":"37012-069","medicineName":"Petroleum Skin Protectant","medicineBrand":"Shopko","expiryDate":"13-Jan-2024","unitPrice":496.31,"prescriptionRequired":false,"stock":125},{"id":"61016-0002","medicineName":"Antioxidant Day SPF 15","medicineBrand":"Columbia Cosmetics Manufacturing, Inc.","expiryDate":"03-Aug-2028","unitPrice":825.55,"prescriptionRequired":false,"stock":68},{"id":"50730-4301","medicineName":"Isopropyl alcohol Swabstick Sterile","medicineBrand":"H and P Industries, Inc. dba Triad Group","expiryDate":"09-Jul-2027","unitPrice":968.25,"prescriptionRequired":false,"stock":325},{"id":"49348-788","medicineName":"Sunmark Nicotine","medicineBrand":"McKesson","expiryDate":"14-Jul-2029","unitPrice":570.67,"prescriptionRequired":true,"stock":803},{"id":"48951-3051","medicineName":"Cerebellum Thalamus A Aurum","medicineBrand":"Uriel Pharmacy Inc.","expiryDate":"23-Jan-2013","unitPrice":79.27,"prescriptionRequired":false,"stock":553},{"id":"49999-449","medicineName":"Actos","medicineBrand":"Lake Erie Medical & Surgical Supply DBA Quality Care Products LLC","expiryDate":"03-Jun-2028","unitPrice":853.26,"prescriptionRequired":false,"stock":881},{"id":"57520-1032","medicineName":"Hepatatox","medicineBrand":"Apotheca Company","expiryDate":"02-Jul-2016","unitPrice":961.08,"prescriptionRequired":false,"stock":635},{"id":"0113-0437","medicineName":"good sense pain relief pm","medicineBrand":"L Perrigo Company","expiryDate":"19-Nov-2012","unitPrice":219.57,"prescriptionRequired":true,"stock":388},{"id":"64942-0810","medicineName":"Axe","medicineBrand":"Conopco Inc. d/b/a Unilever","expiryDate":"12-Jul-2026","unitPrice":764.95,"prescriptionRequired":false,"stock":280},{"id":"35356-512","medicineName":"Carvedilol","medicineBrand":"Lake Erie Medical DBA Quality Care Products LLC","expiryDate":"25-Jun-2014","unitPrice":31.82,"prescriptionRequired":true,"stock":799},{"id":"61671-004","medicineName":"Face Moisturiser","medicineBrand":"Milk & Co Pty Ltd","expiryDate":"19-Sep-2017","unitPrice":871.64,"prescriptionRequired":true,"stock":135},{"id":"49884-678","medicineName":"Nifedipine","medicineBrand":"Par Pharmaceutical, Inc.","expiryDate":"29-Jun-2021","unitPrice":7.66,"prescriptionRequired":false,"stock":929},{"id":"68084-593","medicineName":"Sucralfate","medicineBrand":"American Health Packaging","expiryDate":"01-Nov-2023","unitPrice":939.65,"prescriptionRequired":true,"stock":670},{"id":"57955-0126","medicineName":"Bio Reset/Jet Lag","medicineBrand":"King Bio Inc.","expiryDate":"14-Dec-2024","unitPrice":916.97,"prescriptionRequired":true,"stock":167},{"id":"42507-083","medicineName":"ibu profen cold and sinus","medicineBrand":"HyVee Inc","expiryDate":"10-Sep-2012","unitPrice":955.91,"prescriptionRequired":false,"stock":105}
];


// Select the tbody element where you want to insert data
// Loop through the products and create table rows
products.forEach(product => {
    const row = document.createElement('tr');

    // Create table cells and populate them
    const idCell = document.createElement('td');
    idCell.textContent = product.id;
    const medicineNameCell = document.createElement('td');
    medicineNameCell.textContent = product.medicineName;
    const medicineBrandCell = document.createElement('td');
    medicineBrandCell.textContent = product.medicineBrand;
    const expiryDateCell = document.createElement('td');
    expiryDateCell.textContent = product.expiryDate;
    const unitPriceCell = document.createElement('td');
    unitPriceCell.textContent = `$${product.unitPrice.toFixed(2)}`;
    const prescriptionRequiredCell = document.createElement('td');
    prescriptionRequiredCell.textContent = product.prescriptionRequired ? 'Yes' : 'No';
    const stockCell = document.createElement('td');
    stockCell.textContent = product.stock;

    // Append the cells to the row
    row.appendChild(idCell);
    row.appendChild(medicineNameCell);
    row.appendChild(medicineBrandCell);
    row.appendChild(expiryDateCell);
    row.appendChild(unitPriceCell);
    row.appendChild(prescriptionRequiredCell);
    row.appendChild(stockCell);

    // Append the row to the correct tbody
    tbody1.appendChild(row);
});

// Select the Product link and the Product Page
const productLink = document.getElementById('product-link');
const productPage = document.getElementById('product-page');

// Add a click event listener to the Product link
productLink.addEventListener('click', function () {
    // Toggle the display property of the Product Page
    if (productPage.style.display === 'none') {
        productPage.style.display = 'block';
    } else {
        productPage.style.display = 'none';
    }
});
