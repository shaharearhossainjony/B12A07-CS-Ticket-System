# React Questions & Answers

## **Question 01. What is JSX, and why is it used?**

**Answer:**  
JSX stands for Javascript XML and XML means Xtended Markup Language. So JSX is a extended extention of JavaSrcipt for using react.It allows writng HTML-like code in JavaScript.

### **Uses of Jsx:**
1. It makes easier of building UI code.
2. It helps to show UI elements using a syntax similar to HTML in react.
3. It first convert into plain JavaScript brfore running in the browser.

---

## **Question 02. What is the difference between State and Props?**

**Answer:**  
**State:** State manage data inside a component and it can change over time.  
**Props:** Props are passed from a parent component to a child and it is read only values.

### **Main difference between state and props :**
1. State can be change and props are immutable.
2. State are managed by component and props are managed by parent.
3. States used for dynamic data and props are used to pass data or functions.

---

## **Question 03. What is the useState hook, and how does it work?**

**Answer:**  
useState : useState is a React Hook that allows functional components to store and update state.

**Example:**  
```jsx
const [count, setCount] = useState(0);
```

Where,  
1. count stores the current state value.  
2. setCount updates the state.  
3. React re-renders the component whenever the state changes.

---

## **Question 04. How can you share state between components in React?**

**Answer:**  
State can be shared between components using :  
1. Lifting State Up  
2. Context API  
3. State Management Libraries  
4. URL/Router State  

---

## **Question 05. How is event handling done in React?**

**Answer:**  
Event handling in React uses camelCase event names and functions.

**Example:**  
```jsx
<button onClick={handleClick}>Click Me</button>
```

Where,  
1. React uses camelCase event names (onClick, onChange).  
2. You pass a function, not a function call.  
3. Uses React’s Synthetic Event System for better performance and compatibility.

