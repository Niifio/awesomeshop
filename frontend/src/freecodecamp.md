# Palindrome question

function palindrome(str) {
let newStr = str.toLowerCase();
let tester = newStr.match(/[a-z0-9]/g)
return tester.join("") === tester.reverse().join("")
}

palindrome("eye");


#Roman Numeral Question

function convertToRoman(num) {
 const romanNumeral = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50, XL:40,X:10,IX:9,V:5,IV:4,I:1 }
 let result = ""
 for(const key in romanNumeral){
   let romanNumbers = romanNumeral[key];
   
  while(romanNumbers <= num){
    num -= romanNumbers
    result += key;
  }
 }
 return result
}

convertToRoman(36);


# Cipher Question
const alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",]
function rot13(str) {

let cipherValue = "";
for(let i = 0; i < str.length; i++){
  let char = str[i]
  const alphCheck = alphabets.includes(char)
  if(alphCheck === false){
    cipherValue += char
  }else{
    let charIndex = alphabets.findIndex((num) => num === char)
    cipherValue += alphabets[charIndex + 13 ]|| alphabets[charIndex - 13]

  }
}
return cipherValue
}


rot13("SERR PBQR PNZC");

// /^1 \(\d{3}\) \d{3}-\d{4}$/


# Api v1 sneaker

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'v1-sneakers.p.rapidapi.com',
		'X-RapidAPI-Key': '7ef688d8a1msh1a3458d6bba9a7bp1c3dcdjsna651c59d3755'
	}
};

fetch('https://v1-sneakers.p.rapidapi.com/v1/sneakers?limit=100', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

  # search by brand
  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'v1-sneakers.p.rapidapi.com',
		'X-RapidAPI-Key': '7ef688d8a1msh1a3458d6bba9a7bp1c3dcdjsna651c59d3755'
	}
};

fetch('https://v1-sneakers.p.rapidapi.com/v1/brands', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

  # search by Gender

  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'v1-sneakers.p.rapidapi.com',
		'X-RapidAPI-Key': '7ef688d8a1msh1a3458d6bba9a7bp1c3dcdjsna651c59d3755'
	}
};

fetch('https://v1-sneakers.p.rapidapi.com/v1/genders', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));


# Redux 

# Store
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { productListReducer } from "./reducers/productReducers";

const reducer = combineReducers({ productList: productListReducer });

const initialState = {};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

# productAction

import axios from "axios";
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from "../constants/productConstants";

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    const { data } = await axios.get("/api/products");

    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


# productListReducer

import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from "../constants/productConstants";

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
