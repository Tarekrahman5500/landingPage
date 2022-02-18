// get sliderWrapper class

const wrapper = document.querySelector('.sliderWrapper')
/*console.log(wrapper)

wrapper.style.transform = 'translate(-300vw)'*/

// get menu item for multiple menuItem

const menuItems = document.querySelectorAll('.menuItem')

// product array
const products = [
    {
        id: 1,
        title: "Air Force",
        price: 119,
        colors: [
            {
                code: "black",
                img: "./images/air.png",
            },
            {
                code: "darkblue",
                img: "./images/air2.png",
            },
        ],
    },
    {
        id: 2,
        title: "Air Jordan",
        price: 149,
        colors: [
            {
                code: "lightgray",
                img: "./images/jordan.png",
            },
            {
                code: "green",
                img: "./images/jordan2.png",
            },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        price: 109,
        colors: [
            {
                code: "lightgray",
                img: "./images/blazer.png",
            },
            {
                code: "green",
                img: "./images/blazer2.png",
            },
        ],
    },
    {
        id: 4,
        title: "Crater",
        price: 129,
        colors: [
            {
                code: "black",
                img: "./images/crater.png",
            },
            {
                code: "lightgray",
                img: "./images/crater2.png",
            },
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: 99,
        colors: [
            {
                code: "gray",
                img: "./images/hippie.png",
            },
            {
                code: "black",
                img: "./images/hippie2.png",
            },
        ],
    },
];

// chose product at initial is zero index
let choseProduct = products[0]

// get current product details

const currenProductImage = document.querySelector('.productImg')
const currentProductTitle = document.querySelector('.productTitle')
const currentProductPrice = document.querySelector('.productPrice')
const currentProductColors = document.querySelectorAll('.color')
const currentProductSizes = document.querySelectorAll('.size')

// for each item set on click for slide

menuItems.forEach((item, index) => {

    // click on each nth item
      item.addEventListener('click', () => {
          //set transformation to reach item
          wrapper.style.transform = `translate(${-100 * index}vw)`

          //change the chosen product
          choseProduct = products[index]

          // change details current product
          currentProductTitle.textContent = choseProduct.title
          currentProductPrice.textContent = '$'+choseProduct.price
          currenProductImage.src = choseProduct.colors[0].img

          // chane color of each product
          currentProductColors.forEach((color, index) => {
              color.style.backgroundColor = choseProduct.colors[index].code
              console.log(choseProduct.colors[index].code)
          })
      })
})

//change current Product Item Color
 currentProductColors.forEach((color, index) => {
     color.addEventListener('click', () => {
          currenProductImage.src = choseProduct.colors[index].img
     })
 })

// chane the size of each product

currentProductSizes.forEach((size, index) => {
    size.addEventListener('click', () => {
        // set all size color to default
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = 'white'
            size.style.color = 'black'
        })
        // after default chane the color that is clicked
        size.style.backgroundColor = 'black'
        size.style.color = 'white'
    })
})

//get the buy now button, get payment and close button

const productButton = document.querySelector('.productButton')
const payment = document.querySelector('.payment')
const close = document.querySelector('.close')

// show the payment details when click
productButton.addEventListener('click', () => {
    payment.style.display = 'flex'

})

// after open when close button is click payment details is gone

close.addEventListener('click', () => {
    payment.style.display = 'none'
})


