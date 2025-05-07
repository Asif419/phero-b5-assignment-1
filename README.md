## 📘 What are some differences between interfaces and types in TypeScript?

In TypeScript, both `interface` and `type` can be used to define the structure of data, but they have different capabilities and use cases.

---

### 🔹 1. **Extending and Composition**

- **Interface** supports extension using `extends`:
  ```ts
  interface Person {
    name: string;
  }

  interface Employee extends Person {
    id: number;
  }
``
- **Types** uses intersection types (&) for composition:
```ts
  type Person = {
    name: string;
  };
  type Employee = Person & {
    id: number;
  };
```

### 2. **Use with Primitives and Unions**
- **Type** can define union types and primitives:
```ts
type ID = number | string;
```

### 3. **Prefered Use**
- Use **interface** when describing object shapes, especially for classes or public APIs.
- Use **type** when working with advanced or complex types like unions, tuples, or mapped types.
