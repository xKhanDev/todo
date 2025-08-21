class BankAccount {
  #balance = 0; // private field
  deposit(amount) {
    if (amount > 0) this.#balance += amount;
  }
  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount();
acc.deposit(100);
console.log(acc.getBalance()); // ✅ 100
acc.#balance = 10000; // ❌ Error: Cannot access private field
