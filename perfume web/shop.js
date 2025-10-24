// Product Data
const products = [
    {
        id: 1,
        name: "Midnight Rose",
        brand: "LuxePerfume",
        price: 89.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt3zoZ6dt_72zvZpefq2oXcLHFfvOYvoXzNg&s",
        featured: true
    },
    {
        id: 2,
        name: "Sandalwood",
        brand: "LuxePerfume",
        price: 95.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8DVdigdBME9OXqdRZZgwHuqvoRFWMT5Jk-A&s",
        category: "woody",
        description: "Rich sandalwood with hints of amber and vanilla",
        inStock: true,
        featured: true
    },
    {
        id: 3,
        name: "Ocean Breeze",
        brand: "LuxePerfume",
        price: 79.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMDnK-vhLJoxGOvh5xR5BEBTMSyixwWaxmKA&s",
        category: "fresh",
        description: "Fresh citrus notes with marine accords",
        inStock: true,
        featured: true
    },
    {
        id: 4,
        name: "Mokhalit",
        brand: "LuxePerfume",
        price: 80.9,
        image: "https://images-cdn.u-buy.co.nz/64f74549a5cc2663b318a424-mokhalat-elazm-by-oud-elite-100ml-spray.jpg",
        category: "fresh",
        description: "Fresh citrus notes with marine accords",
        inStock: true,
        featured: true
    },
       {
        id: 5,
        name: "Freash",
        brand: "LuxePerfume",
        price: 80.9,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTQO8dyM1pwNIKOnLNJjwwYLMzsRlZpGgHif6X4w-l7HLH55HMfwQ2jd-gSj4g8_zT9w0&usqp=CAU",
        category: "fresh",
        description: "Fresh citrus notes with marine accords",
        inStock: true,
        featured: true
    },   {
        id: 6,
        name: "Ocean Breeze",
        brand: "LuxePerfume",
        price: 80.9,
        image: "https://static.wixstatic.com/media/5a91a7_692a463da4be47b5b1517690aca5377c~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        category: "fresh",
        description: "Fresh citrus notes with marine accords",
        inStock: true,
        featured: true
    },
       {
        id: 7,
        name: "Dirham",
        brand: "LuxePerfume",
        price: 80.9,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQutxpi5hyD-0_1OUJbHNSvf8D4nw4oKjorjg&s",
        category: "fresh",
        description: "Fresh citrus notes with marine accords",
        inStock: true,
        featured: true
    },
       {
        id: 8,
        name: "Ocean Breeze",
        brand: "LuxePerfume",
        price: 80.9,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPu-m-PkocfKZC_gmKQVLe-8_aDdNRHLwu2Q&s",
        category: "fresh",
        description: "Fresh citrus notes with marine accords",
        inStock: true,
        featured: true
    },
       {
        id: 9,
        name: "Sandalwood",
        brand: "LuxePerfume",
        price: 80.9,
        image: "https://static3.webx.pk/files/8079/Images/d2091c6b472e40e0b7d173bba97242e0-8079-0-120725104055965.webp",
        category: "fresh",
        description: "Fresh citrus notes with marine accords",
        inStock: true,
        featured: true
    },
     {
        id: 10,
        name: "Mokhalit",
        brand: "LuxePerfume",
        price: 80.9,
        image: "https://www.intenseoud.com/cdn/shop/files/quwafiblack3_ba589aa1-b9ac-41fb-b112-a3a77500bfde.jpg",
        category: "fresh",
        description: "Fresh citrus notes with marine accords",
        inStock: true,
        featured: true
    },
     {
        id: 11,
        name: "Midenight Rose",
        brand: "LuxePerfume",
        price: 80.9,
        image: "data:image/jpeg;base64,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",
        category: "fresh",
        description: "Fresh citrus notes with marine accords",
        inStock: true,
        featured: true
    },
     {
        id: 12,
        name: "Fresh",
        brand: "LuxePerfume",
        price: 80.9,
        image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPDw8PDw8PDw0NDQ0NDQ0PDw8PDQ0NFREWFhYRFRUYHSggGBomGxUVITEhJSovLi4uFx8zODcsNzQtLi0BCgoKDg0OGBAQGC0fHSUtLSsrLS0tLS0tKysrLS0tLSsvKy0tLSstKysrLS0rKy0tLy0tKystKy0tNy0tLSsuLf/AABEIAOsA1gMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAAAQIDBAUGB//EADwQAAEEAAMECQIDBgYDAAAAAAEAAgMRBBIhBTFBUQYTIjJhcYGRoRVSQnLRYoKxssHwBxQjM6LhU4OS/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECAwQF/8QALBEBAAIBAwMDAwIHAAAAAAAAAAECEQMSIQQxQRNR8GFxodHhIiNCgZGx8f/aAAwDAQACEQMRAD8A3aaELg+yFIKIUlQJpJhQNCEKIE0IVUwmhARTCaAmqgQhMIGEITUQJhJSCKEwhCBpgIATQCYQE0QIQhRcNUhCFoMJoCEUKSQTUlkIQhRYNMJKSqhMBJSCATQhUCkkE1JZCaEwEUwE0k0UKQSCkgEwgJoySaEwigBCYQitQgITCoaEIQMJoQsshNJNVTCaQTRTCaAmgAhCYVQ0BCahAUgohTRQhCYQMJoTCJJoQhQgwmhMBVQAhSSQaekwnSaJkqRSadIEhOk6QwVJ0nSYCKSYCdJ0iEmnSdKhAJkVpx5cVdg2ZpG+HaPp/wB0t252YU4B44B4Dq8r3eisVy8+pr7LYw59FLcSYGJ24OjP7JzN9na/Kx5NmPHcLXjkDld7O/pam2Wq69J8sEBNTkic005rmnk4EH5SAUdiAUgEUmhkBNCdIEEwEwFIBFIBSCKTQFJJoQaqkUp0nSYRDKnSlSdKmUaTpOk6QRpOk06UETpqdANSToAFyW1+n2GiOSAHEvus4OSAeTqJd6CvFbTppgpJ8FLHG7KSY3Sb+1EHAub7cONLyDaOAMVOBLhdO4Ut1rl5dfWtWdsPatj4ySWNjpo2xuexkjQx4e1zHCwQfKv+tL2NLluhm1uvwrTeZ8LTnaB2w2x1gA49rK8Dm5o3NK6prgRfCrsahS0Ya6fV3Rie7N2azvO500f3/e5Z4VGGblaB4a+fFXBbjs8epbdaZSUlEKQVYSDzVb2/a4BzfY6Kl+Fid+AtPNhr4Nj2pWoTGW62mvaWE/Zx/A9rvB3Yd86fKxpYHM7zXN5EjQ+R4rbKTXkbiaO8cD5hZmkO1eptHflpQFKltHxMdvYAebOwfbd8LCxUIY8tBuqPiLANfKxNcPTp61b8QppNCYCy7EnSlSdIFSFIBCo1VJ0nSdImEaTUqTQRpFKVIpFKk6TpOkES29CLB0I4ELzHpRsrqpZIyP8ATeCWeLDu/vwXqNLhf8Uj/p4drHtExe7NGCOsdDW+hqBmrXdvWqTy8vU1ia59nEdEtuHAzl2rmEhrgD3qNfyl4/evgvR9hdLoZ5epjincxurS1gJDQfxUaa2i1t3QDbNaryPFQPjDcwADr3a1XNdb0B2iIy4NoTRPE8QoXPDREsF79RTgOba4ro8NbTXmHr2ztpiaxkcwgubldWYObVtPC+0NxI366GtgCuVnlMMrHx05k4jII/G4X1T/AAcczoz+Z7uS3E+2sPG1r5Zoo2yAOZ1j2tLh4A70ajltWlWBcni+nez4RbpnHkGxSW8/sAgF+8atsc1Rs7p/HMbbC5sTSWyNcaxDDwtlaWNa434FTMN107TnEO0pOkMIIBBsEAg8CDxTpVhGkqU6SQOFoLhfdHad4NGpWskeXOc473OLj6lbGZ2WJ54vqMeup+BXqtbS53evpq8TYUnSYCYCy9ZAKQCYCagVITQg1aFKk6VEaTpNOkTJUik00yFSE06QwS866WbM6meR4BImcZc5JLnWdxJ5bvAAL0YBc902kgGHPWPaJWW6Nm+R44gN31u13aLVJxLh1Gnurx4eZY3DiRhbx3tPJy02zMQ+GWN4sPjkbIOfZN/0WdNiHyOysDtbIjYC6Qt5mtw8d3irsLsdx1eQwjtZG0ZPU7h6X5rU2efT6e1m6HSiV7RAxzYYWl5iZkM03VucCGCmm8vA0NOPPHigleczjkc7UknrcQ4eJNtb8+YUmthhFMoBwBpmryf2nHW/lUTYxx0b2G8m7z5lY/il6v5Oj35n2j9WZE2HDkudq8kFwBL5Xkbs7zr7lbLEZQ6DEs0ZO0QyDTRx1ZZ/MXM/9q5ilv8AYVTwTYVxo0XxuG9t8R4h1H1UtTEZdNDqvUv6eIiPH3/d6n0NxvW4VrSbfAeqPizew+VafureELz/APw8xxzkmhnAinZwbKHFt+kgLP3wvQyF0icw8WtTbeYVkKJVhCI2W4Dx18AtOLE2i7uM+1uY/mdr/ABYoCsnfne533OJHgOA9lEBcZnl9LTrtrEEApIRSjYTATATpAqTTQg1dITQiBCE6VMEnSadIpUilIBajpRiHxYcujcWajO8VbYrGd1ndTcxPGmmkSZww+lHSL/LVDCM+KeLDWjrHRt+7IN58TTRxO4HjMLsuWZ7nPL2ukOaTKRJiZCeL5D2WeQ3cHcFl9GsPHEMVnYZcZHJIZrP+rMwkuieCeBb63YWBjduyyDIyoYv/HFpY8XbyrETPZm9qacRa/Mz4+flk45sWFAijyNJ1eyI5nA8M8m8u8d/itRJiXHQdlvJv9SqULcUiHk1OqveMRxH0KkUtlgdjyzxukjyuylrRGHt6xzi4AWLpvHvEblZPstkLHddK0TGMmONpJLXiShYDTYcwFwJLa0veFp5WppZWzMT1MzJOANO8WHQ/wB+CxkJPLVbTWYmPDtcBKMNjwSagxTc9j8JIDJCOAIHVPHixxXquGkL2NcQA7UPA3B4NOHuCvF4XmfBBwGabBODw3e5zWii0fmjLm+ZXqHQ/aIngYc2Y5G2fuc0Bub1Z1bvUrlTjh9Lqoi9Y1I8/P8Aefw3ZCjKcrHu4kZB5u3/ABasIWNtF1BjPAvPmdB8D5W5nEPHp1zaIYSEKQC5PoEApBCYCACYCAE1QITQmRqqTpOk6QRTpSpFIEAmnSECUJ4Q9paeO41dHgVYhEl5jtXDvwOIEjQagDhlBt0mAJGZm7UxONjwo2S5YO3sGGPEsdGGftsI7odvIHhqCPPwXofSbZhmizMrrYzmZegLqqj4EHKfMHguB2dUscmDNtLblw2awRV9gjgQSRXIqxOOXO1N9fTnv4+fXt98NMpMIBBLQ4De0lwDhyJaQfYoLSCQRRBog7wUl1fOw2c+2pacyKoInOeS2PQlpygNJ3aNa0W0C6N7ytXSy9n7PlxDssMbnm6J0DGmie046N0BOp4Le4Lo0OqMriMQ8GJ7YYJD1b4HW5r87Wk07JI2zkDcpJO6yOcw2GfK9scbS+R5prBvcaugqgu7ZMC0swLW9Y8nExyZMOcPgXxuY0va7qmguyOc12XO7RmpNrj9plxnmL2NY8zSF7GtexrXZjYDX9povgdfJCGd0VxfVYhrT3Jv9N3LNwP9PVd/0YAwj3xfga4PjHKPUivANMjf3AvKWkjUaEGweR5r03A4rrsPhsW2szT1MvK7G/yflHk4rFoxOXv6e2/TnTn58nl6E1tkAcVrMTJne53Amh+UaD4U9kYwOw7jfaiuLXfqOwfPKQVUApaU0K4mZ/sQCYTATpZeklIITQJMJgJqAAQmhVGspCE6UUkJ0nSCKdKVIpAqTpOkUgRF6cDpS8x6VYTJMcRh/wAMzh5Ti/h4B9Qea9Jx03VRPk4taSPzbh80uGMYc1zH2WSDK/iRxDh4g0R5LUOd55c3tHLKG4hndkoPH2v8f4LXrYRsMEz4Za6uUljq7olqw4eDhRCw8RCY3OYd7T7jgVqs+Hm6in9cee/3/fu3mzNrPdFhcLHkbiY8Y3/LzyX1UbHPDhevZdn0zZScriLA0O42hhZAHPxMkc75SDDBjHz4KBsXXSda3tODnBpDMjS7RrrA4Lh1fi8XJM5z5Hl7nvL3E6AvIALqGl0BqtvLh0uM6TxxGsMwPdA7qsLK9ha1mGbba71vzM0Ojd5Op1XM4rEOkdmcGg0AGsYyNjWjcA1oAVKyodnyvjlmDCIoGRvke6mgNe7Kyr71uBGnIoMVdh/h/jQTPg39yZjpGD9oCnAebfkLj1k7OxjoJopm96KRrx4gHUeosKTGXXSvttEvUtjYsslDHHSa43jcP8xHmogcy0vPk1q6IBcvjsNcolgPZxDGYnDG6a6VgBDb/ablvwieukwswkjZI3uyNa4cNCFzfQ4zOFtITATAUaKlKk0UogTpOk6VTJUhNCqNZSdK3InkWW1NJ0rcieRUU0nlVuRGRBXlTpWZEBiDn+lM1MZGN73Fx/K3/s/C5shbXb8mbEPHCMNjAO+gL/iStaQq4TOZaPpBhczc/AANceLRdtd6H4J5LAeTNDnP+9B2JRzb939fddTJGHAgiwRRHguVcDhprPdbUct/ihPdf6cU+qxic1ntPz8d/wDLBQsnaGF6p5A7ju0w/sngsZdYnLw3rNZms93YbC2NgZm1G9uLkewB+Gme7BYuN28uhIcWPO7Q3+ZbTpRBK/CThsb43Sy9f1EgAlj2fhIo46oEjvuz6GqJpcDg5+qkZJkbIGPDjG8BzJG8WOB4EWPVeovxbGtjkY7MInx4nB5yXGfAYjSXDOJvVva0O7JFaZYiszOIjLyhZ2y9kz4p2WCMvrvO3Rs83HQeW9dXgeiMZle8h3UF7zEyW25YyTlBANuIFcaXT4Xq8PHlaWRxsPakcWRsB8XHQeW/wWJv7PfTorYzecKsLsyXD7OZFIRLPhSZocgJByknqtdSC0uZdbnFbLY0ot7LJsmZt96nOIdfLth2nC6WTshn+bJyW5rKt72vZBfINNPl9cjSOa3G0NlhjWyNt0jHdt5rM6M6EACgAOA3bzvJJYzCW1KVtFYYVJ0p0nlWMO+UQE6UsqeRVnKCdKYanlRMoUkrcqETcwkKGcIzhR2TTUM4TzBBJNRzBGYKCaEg5O0RViMLHIKkY1/LMASPI8FqsV0aid/tudGeR7bfnX5W6tMKpNYlx2K6Pzs3NEg5sOvsdfa1zG3tnk9otLXsBDmuBBcw8CCvWlCbDskGV7Gvb9rmhw+VWJr7PE8OOuhMB1mgGeBx3yRcvPh6BYWGwj5D2GmuJOjR6rf9K9jvwOKzRgmPMZcOebT3ob56H2BWxjORgke0RNIBD5LaNd2W9/oCpumvZ09CutMWtOMfn/n6NXgdhNFGTtHlqG+28/wXQYaaKAZuyA3SzlAb67m+lla8SPk7oytP45ARfkzefUjyWXh8I0EOdb3jc99Et/KNzfQLEzM93rpWmnGKQyHY+eY9gZGH8cgNejN7vXKPNWw4QWHvLpZBufIbLPyjc30CvweFfKajYXVvd+EeZW+weww2jIcx+0aNH6rUQ53vEd+7O6L49jGdWGuskufIdGDwHEnwW1xONL9GjK0777x/RYbGBooAADQAaClJbzxh4LadbX3BMBJNRowFIBQCdqonSYChadq5RPKhRzIVRxJx7/u/lUTtF/3fyq36UeY+f0R9JPMe5/Rcnqwp+oyc/lqPqUvP+VXfSTzHuf0R9JPMe5/RDCj6lLz/AJUfU5uf8qv+knmPc/on9JP3D5/RDEe7H+pz8x/xR9Tn8P8AiskbJP3D5/RH0k/cEyu2PdR9TxHMewTG08Rz+ArHbKP3D5UfpR+8exTK7Y9y+p4jn8BH1TEc/hqDsp33j2KidlO+8exTMrsr7q8U92JAixJecO5zes6umvyhwNg+BAP7oWmn2UMPK9hpz43EdZmL7bWjmk7gRR05ret2O4/jb/8AJWTiNllzWNcWkR90kEuy/bfLw4JMtVrFZzlz8EZd3QT46rLgheHC4XuFi7GnstvHs2tA4D0KuZgD9w9lIatOfLd7GkBjILWs3dkaUAd1eyzex4LR4XDFhvN8LPLl0izx20YieJZvZStqwcyYcm49P6sywlYWLmTzJlNjJsIsLGzJ5lMmxfaLVGZGZF2r8yFRmQmU2tdSKViFl2V5U8qmmgryJ5FNFoI5E8ilaVoKnMUC1WvVRQKgighCBgqTyoJlFyLUg5RQi5XserMyxmlWNcirg5MFVgqQKJKy0WooVwylaLUUIJ2i1FCglaaghBQhCEAhCEAhCEAhCEEHqoq1yqKAQhCACZSCaBITSQMKYUFMI0m0qxqqarQiSki0kKodotJCCVoUU0DQkhB//9k=",
        category: "fresh",
        description: "Fresh citrus notes with marine accords",
        inStock: true,
        featured: true
    },
         {
        id: 13,
        name: "Marjan",
        brand: "J.",
        price: 80.9,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROh58Z4KZBaD0vXvZGAWySBPve7pGhl-Vpow&s",
        category: "fresh",
        description: "Fresh citrus notes with marine accords",
        inStock: true,
        featured: true
    },
     {
        id: 14,
        name: "Mokhalit",
        brand: "LuxePerfume",
        price: 80.9,
        image: "https://www.intenseoud.com/cdn/shop/files/quwafiblack3_ba589aa1-b9ac-41fb-b112-a3a77500bfde.jpg",
        category: "fresh",
        description: "Fresh citrus notes with marine accords",
        inStock: true,
        featured: true
    },
     {
        id: 15,
        name: "Midenight Rose",
        brand: "J.",
        price: 80.9,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjY3ASkrUCEVamyo7w_Fht0nf1bORtab_vuA&s",
        category: "fresh",
        description: "Fresh citrus notes with marine accords",
        inStock: true,
        featured: true
    },
     {
        id: 16,
        name: "Oceen Breeze",
        brand: "LuxePerfume",
        price: 80.9,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDzyabsvAE2-thIDyqciW8ro9nvd6tIZI_5A&s",
        category: "fresh",
        description: "Fresh citrus notes with marine accords",
        inStock: true,
        featured: true
    },{
        id: 17,
        name: "Fresh",
        brand: "LuxePerfume",
        price: 80.9,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlBmpC1cGvM9CKSyRz1voCD8UjapoVTLItyQ&sss",
        category: "fresh",
        description: "Fresh citrus notes with marine accords",
        inStock: true,
        featured: true
    },{
        id: 18,
        name: "Dirham",
        brand: "Oud",
        price: 80.9,
        image: "data:image/jpeg;base64,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",
        category: "fresh",
        description: "Fresh citrus notes with marine accords",
        inStock: true,
        featured: true
    }
];

// Cart Management
class Cart {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('cart')) || [];
    }

    addItem(product, quantity = 1) {
        const existingItem = this.items.find(item => item.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({
                ...product,
                quantity: quantity
            });
        }
        
        this.saveToLocalStorage();
        this.updateCartBadge();
        this.showNotification('Product added to cart!');
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.saveToLocalStorage();
        this.updateCartBadge();
    }

    updateQuantity(productId, quantity) {
        const item = this.items.find(item => item.id === productId);
        if (item) {
            item.quantity = quantity;
            if (item.quantity <= 0) {
                this.removeItem(productId);
            } else {
                this.saveToLocalStorage();
            }
        }
    }

    getTotal() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    getItemCount() {
        return this.items.reduce((count, item) => count + item.quantity, 0);
    }

    saveToLocalStorage() {
        localStorage.setItem('cart', JSON.stringify(this.items));
    }

    updateCartBadge() {
        const badge = document.querySelector('.cart-badge');
        if (badge) {
            badge.textContent = this.getItemCount();
            badge.style.display = this.getItemCount() > 0 ? 'flex' : 'none';
        }
    }

    showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'tooltip-notification';
        notification.textContent = message;

        // Append to body
        document.body.appendChild(notification);

        // Remove notification after 3 seconds
        setTimeout(() => {
            // Fade out
            notification.style.opacity = '0';
            // Remove after transition
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
}

// Initialize cart
const cart = new Cart();

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    loadAllProducts();
    setupEventListeners();
    cart.updateCartBadge();
    
    // Add cart badge to shopping bag icon
    const cartIcon = document.getElementById('openCartModal');
    if (cartIcon) {
        const badge = document.createElement('span');
        badge.className = 'cart-badge';
        badge.style.display = 'none';
        cartIcon.style.position = 'relative';
        cartIcon.appendChild(badge);
        cart.updateCartBadge();
    }
}

function loadAllProducts() {
    const container = document.getElementById('products-grid');
    if (!container) return;

    container.innerHTML = products.map(product => `
        <div class="col-lg-4 col-md-6">
            <div class="product-card">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                    ${!product.inStock ? '<span class="product-badge">Out of Stock</span>' : ''}
                </div>
                <div class="product-content">
                    <h4 class="product-title">${product.name}</h4>
                    <p class="product-brand">${product.brand}</p>
                    <p class="product-price">$${product.price}</p>
                    <div class="product-actions">
                        <button class="btn btn-primary btn-sm" onclick="addToCart(${product.id})" ${!product.inStock ? 'disabled' : ''}>
                            ${!product.inStock ? 'Out of Stock' : 'Add to Cart'}
                        </button>
                        <button class="btn btn-outline-primary btn-sm" onclick="viewProduct(${product.id})">
                            View
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function setupEventListeners() {
    // Search functionality
    const searchInput = document.querySelector('input[type="search"]');
    if (searchInput) {
        searchInput.addEventListener('input', debounce(handleSearch, 300));
    }

    // Cart modal
    const cartModalBtn = document.getElementById('openCartModal');
    if (cartModalBtn) {
        cartModalBtn.addEventListener('click', function(e) {
            e.preventDefault();
            renderCartModal();
            const modal = new bootstrap.Modal(document.getElementById('cartModal'));
            modal.show();
        });
    }

    // Mobile menu enhancements
    const navbarToggler = document.querySelector('.navbar-toggler');
    if (navbarToggler) {
        navbarToggler.addEventListener('click', function() {
            document.body.classList.toggle('menu-open');
        });
    }
}

function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.brand.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );
    
    renderFilteredProducts(filteredProducts);
}

function renderFilteredProducts(filteredProducts) {
    const container = document.getElementById('products-grid');
    if (!container) return;

    container.innerHTML = filteredProducts.map(product => `
        <div class="col-lg-4 col-md-6">
            <div class="product-card">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                    ${!product.inStock ? '<span class="product-badge">Out of Stock</span>' : ''}
                </div>
                <div class="product-content">
                    <h4 class="product-title">${product.name}</h4>
                    <p class="product-brand">${product.brand}</p>
                    <p class="product-price">$${product.price}</p>
                    <div class="product-actions">
                        <button class="btn btn-primary btn-sm" onclick="addToCart(${product.id})" ${!product.inStock ? 'disabled' : ''}>
                            ${!product.inStock ? 'Out of Stock' : 'Add to Cart'}
                        </button>
                        <button class="btn btn-outline-primary btn-sm" onclick="viewProduct(${product.id})">
                            View
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.addItem(product);
    }
}

function viewProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        document.getElementById("productTitle").innerText = product.name;
        document.getElementById("productImage").src = product.image;
        document.getElementById("productBrand").innerText = product.brand;
        document.getElementById("productPrice").innerText = `$${product.price}`;
        document.getElementById("productDescription").innerText = product.description;
        document.getElementById("productCategory").innerText = product.category;
        document.getElementById("productStock").innerText = product.inStock ? "In Stock" : "Out of Stock";

        // Update add to cart button in modal
        const modalAddToCartBtn = document.getElementById("modalAddToCart");
        modalAddToCartBtn.onclick = function() { addToCart(product.id); };
        modalAddToCartBtn.disabled = !product.inStock;
        modalAddToCartBtn.textContent = product.inStock ? "Add to Cart" : "Out of Stock";

        // Show modal
        const modal = new bootstrap.Modal(document.getElementById("productModal"));
        modal.show();
    }
}

function renderCartModal() {
    const container = document.getElementById('cart-modal-body');
    container.innerHTML = '';

    if (cart.items.length === 0) {
        container.innerHTML = '<p class="text-center">Your cart is empty.</p>';
        document.getElementById('modal-cart-total').innerText = '';
        return;
    }

    cart.items.forEach(item => {
        const itemHTML = `
            <div class="d-flex align-items-center border-bottom pb-3 mb-3">
                <img src="${item.image}" alt="${item.name}" class="me-3" style="width: 80px; height: auto; border-radius: 8px;">
                <div class="flex-grow-1">
                    <h6 class="mb-1 ps-2">${item.name}</h6>
                    <p class="mb-0  ps-2">Qty: ${item.quantity} × $${item.price.toFixed(2)}</p>
                    <p class="mb-0  ps-2">Subtotal: $${(item.quantity * item.price).toFixed(2)}</p>
                </div>
                <button class="btn btn-sm btn-danger ms-3" onclick="removeFromModalCart(${item.id})">Remove</button>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', itemHTML);
    });

    document.getElementById('modal-cart-total').innerText = `Total: $${cart.getTotal().toFixed(2)}`;
}

function removeFromModalCart(productId) {
    cart.removeItem(productId);
    renderCartModal();
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Export for use in other files
window.cart = cart;
window.products = products;


localStorage
saveToLocalStorage
removeItem


// pagination 

const allProducts = [
  // 1–30 products for example
  { id: 1, title: "Perfume A", price: "$50" },
  { id: 2, title: "Perfume B", price: "$60" },
  { id: 3, title: "Perfume C", price: "$70" },
  // ...
  { id: 30, title: "Perfume Z", price: "$90" },
];
const productsPerPage = 9; // har page pe kitne products
let currentPage = 1;

function renderProducts(page) {
  const start = (page - 1) * productsPerPage;
  const end = start + productsPerPage;
  const paginatedItems = allProducts.slice(start, end);

  const grid = document.getElementById("products-grid");
  grid.innerHTML = "";

  paginatedItems.forEach((product) => {
    grid.innerHTML += `
      <div class="col-md-4">
        <div class="card h-100">
          <div class="card-body">
            <h5>${product.title}</h5>
            <p>${product.price}</p>
            <button class="btn btn-sm btn-primary">View</button>
          </div>
        </div>
      </div>
    `;
  });
}
