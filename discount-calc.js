function calculateDiscountedAmount(totalPurchaseAmount) {
    let discountPercentage = 0;

    if (totalPurchaseAmount >= 50 && totalPurchaseAmount <= 100) {
        discountPercentage = 5;
    } else if (totalPurchaseAmount > 100 && totalPurchaseAmount <= 200) {
        discountPercentage = 10;
    } else if (totalPurchaseAmount > 200) {
        discountPercentage = 15;
    }

    const discountAmount = (totalPurchaseAmount * discountPercentage) / 100;
    const discountedAmount = totalPurchaseAmount - discountAmount;

    console.log(`Total Amount: ${totalPurchaseAmount.toFixed(2)}`);
    console.log(`Discount Amount: ${discountAmount.toFixed(2)}`);
    console.log(`Discounted Amount: ${discountedAmount.toFixed(2)}`);
}

console.log(calculateDiscountedAmount(200));