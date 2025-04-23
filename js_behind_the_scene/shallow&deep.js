// 📘 Shallow vs Deep Copy in JavaScript

// 🔁 SHALLOW COPY
// When you copy an object using shallow copy, only the top-level properties are copied.
// If the object contains nested objects, they are still referenced — not fully copied.

const original = {
    name: "Sufyan",
    location: "Quetta",
    education: {
      degree: "BS",
      university: "University of Baluchistan"
    }
  };
  
  // Using Object.assign (Shallow Copy)
  const shallowCopy1 = Object.assign({}, original);
  
  // Using spread operator (also Shallow Copy)
  const shallowCopy2 = { ...original };
  
  shallowCopy1.name = "Ali"; // ✅ Works fine (top-level copy)
  shallowCopy1.education.degree = "MS"; // ❌ Changes original too! Because education is still referenced
  
  console.log(original.education.degree); // "MS"
  
  
  // 🔁 DEEP COPY (✅ Modern Way)
  // Deep copy means ALL levels are duplicated — completely independent
  // Modern and safe method: structuredClone()
  
  const deepCopy = structuredClone(original);
  
  deepCopy.name = "Khan"; // ✅ Won't affect original
  
  deepCopy.education.degree = "PhD"; // ✅ Also won't affect original
  
  console.log(original.education.degree); // "MS" (from previous shallow copy)
  console.log(deepCopy.education.degree); // "PhD"
  
  // ✅ structuredClone is available in most modern browsers and Node.js (v17+)
  // ❗ Not available in older environments (polyfills or external libs like lodash may be needed)
  
  
  // 🔥 Summary:
  // - Object.assign & spread = shallow copy
  // - structuredClone = deep copy
  // - structuredClone is the most modern and reliable way to deep copy nested objects.
  