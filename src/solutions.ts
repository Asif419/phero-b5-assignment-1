{

    function formatString(input: string, toUpper?: boolean): string {
        if (typeof toUpper === "undefined")
            return input.toUpperCase();
        else if (toUpper)
            return input.toUpperCase();
        else (!toUpper)
        return input.toLowerCase();
    }



    type TItem = { title: string; rating: number }

    function filterByRating(items: TItem[]): TItem[] {
        let filteredItems: TItem[] = [];
        items.map((item: TItem) => {
            if (item.rating >= 4)
                filteredItems.push(item);
        })

        return filteredItems;
    }



    type TArray<T> = T[]

    function concatenateArrays<T>(...arrays: T[][]): T[] {
        let newArray: TArray<T> = [];
        arrays.forEach((subarray) => {
            subarray.forEach(item => newArray.push(item));
        })
        return newArray;
    }



    class Vehicle {
        constructor(private make: string, private year: number) {
            this.make = make;
            this.year = year;
        }
        getInfo() {
            console.log(`"Make: ${this.make}, Year: ${this.year}"`)
        }
    }
    class Car extends Vehicle {
        constructor(make: string, year: number, private model: string) {
            super(make, year)
            this.model = model;
        }
        getModel() {
            console.log(`"Model: ${this.model}"`)
        }

    }


    
    function processValue(value: string | number): number {
        if (typeof value === "string")
            return value.length;
        else
            return value * 2;
    }



    interface Product {
        name: string;
        price: number;
    }

    function getMostExpensiveProduct(products: Product[]): Product | null {
        let productWithMaxPrice: Product = products[0];
        let maxPrice: number = products[0].price;

        if (products.length == 0) {
            return null
        }
        else {
            products.forEach(product => {
                if (product.price >= maxPrice) {
                    maxPrice = product.price;
                    productWithMaxPrice = product
                }
            })
            return productWithMaxPrice;
        }
    }



    enum Day {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }

    function getDayType(day: Day): string {
        if (day != 5 && day != 6) {
            return `"Weekday"`;
        }
        else {
            return `"Weekend"`
        }
    }



    async function squareAsync(n: number): Promise<number> {
        if (n < 0) {
            throw new Error("Negative number not allowed");
        }

        await new Promise(resolve => setTimeout(resolve, 1000));
        return n * n;
    }
}