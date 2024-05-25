import React, { useState } from 'react';


const Payment = () => {
  const [paymentAmount, setPaymentAmount] = useState('');
  const [paymentDescription, setPaymentDescription] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card'); // Default payment method is card
  const [paymentDestination, setPaymentDestination] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [paymentError, setPaymentError] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [selectedBank, setSelectedBank] = useState('');
  const [selectedWallet, setSelectedWallet] = useState('');
  const [bankNumber, setBankNumber] = useState('');
  const [bankPassword, setBankPassword] = useState('');
  const [walletPin, setWalletPin] = useState('');

  const paymentMethods = ['Card', 'Bank Transfer', 'Digital Wallet'];
  const bankOptions = ['Bank A', 'Bank B', 'Bank C', 'Bank D', 'Bank E']; // Example bank options
  const walletOptions = ['Wallet X', 'Wallet Y', 'Wallet Z', 'Wallet A', 'Wallet B']; // Example wallet options

  const handlePayment = async () => {
    if (!paymentAmount || parseFloat(paymentAmount) <= 0 || !paymentDestination) {
      setPaymentError('Please enter valid amount and payment destination.');
      return;
    }

    setIsLoading(true);
    setPaymentError(null);

    
    setTimeout(() => {
      setIsLoading(false);
      setPaymentStatus('Payment successful!');
    }, 2000);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'amount') {
      
      if (!isNaN(value) && parseFloat(value) >= 0) {
        setPaymentAmount(value);
        setPaymentError(null);
      }
    } else if (name === 'description') {
      setPaymentDescription(value);
    } else if (name === 'method') {
      setPaymentMethod(value.toLowerCase()); 
    } else if (name === 'destination') {
      setPaymentDestination(value);
    } else if (name === 'bank') {
      setSelectedBank(value);
      setBankNumber('');
      setBankPassword('');
    } else if (name === 'wallet') {
      setSelectedWallet(value);
      setWalletPin('');
    } else if (name === 'bankNumber') {
      setBankNumber(value);
    } else if (name === 'bankPassword') {
      setBankPassword(value);
    } else if (name === 'walletPin') {
      setWalletPin(value);
    }
  };

  return (
    <>
    <div className="outerpayment">
    <div className="container mx-auto py-8">
      <div className="max-w-xl mx-auto bg-transparent shadow-2xl rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-semibold mb-4 text-center">Make a Payment</h2>
        <div className="mb-4">
          <label htmlFor="amount" className="block text-gray-700 text-sm font-bold mb-2">Amount:</label>
          <input 
            type="number" 
            id="amount" 
            name="amount" 
            value={paymentAmount} 
            onChange={handleInputChange} 
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            placeholder="Enter amount"
            required 
          />
          {paymentError && <p className="text-red-500 text-xs italic">{paymentError}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description:</label>
          <input 
            type="text" 
            id="description" 
            name="description" 
            value={paymentDescription} 
            onChange={handleInputChange} 
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            placeholder="Enter description"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="destination" className="block text-gray-700 text-sm font-bold mb-2">Payment Destination:</label>
          <input 
            type="text" 
            id="destination" 
            name="destination" 
            value={paymentDestination} 
            onChange={handleInputChange} 
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            placeholder="Enter payment destination"
            required 
          />
        </div>
        <div className="mb-4">
          <label htmlFor="method" className="block text-gray-700 text-sm font-bold mb-2">Payment Method:</label>
          <select 
            id="method" 
            name="method" 
            value={paymentMethod} 
            onChange={handleInputChange} 
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            {paymentMethods.map(method => (
              <option key={method} value={method.toLowerCase()}>{method}</option>
            ))}
          </select>
        </div>
        {paymentMethod === 'card' && (
          <div>
            <div className="mb-4">
              <label htmlFor="cardNumber" className="block text-gray-700 text-sm font-bold mb-2">Card Number:</label>
              <input 
                type="text" 
                id="cardNumber" 
                name="cardNumber" 
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                placeholder="Enter card number"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="expiryDate" className="block text-gray-700 text-sm font-bold mb-2">Expiry Date:</label>
              <input 
                type="text" 
                id="expiryDate" 
                name="expiryDate" 
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                placeholder="MM/YYYY"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="cvv" className="block text-gray-700 text-sm font-bold mb-2">CVV:</label>
              <input 
                type="text" 
                id="cvv" 
                name="cvv" 
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                placeholder="Enter CVV"
              />
            </div>
          </div>
        )}
        {paymentMethod === 'bank transfer' && (
          <div>
            <div className="mb-4">
              <label htmlFor="bank" className="block text-gray-700 text-sm font-bold mb-2">Select Bank:</label>
              <select 
                id="bank" 
                name="bank" 
                onChange={handleInputChange} 
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              >
                <option value="">Select Bank</option>
                {bankOptions.map((bank, index) => (
                  <option key={index} value={bank}>{bank}</option>
                ))}
              </select>
            </div>
            {selectedBank && (
              <>
                <div className="mb-4">
                  <label htmlFor="bankNumber" className="block text-gray-700 text-sm font-bold mb-2">Bank Account Number:</label>
                  <input 
                    type="text" 
                    id="bankNumber" 
                    name="bankNumber" 
                    value={bankNumber}
                    onChange={handleInputChange} 
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    placeholder="Enter bank account number"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="bankPassword" className="block text-gray-700 text-sm font-bold mb-2">Bank Password:</label>
                  <input 
                    type="password" 
                    id="bankPassword" 
                    name="bankPassword" 
                    value={bankPassword}
                    onChange={handleInputChange} 
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    placeholder="Enter bank password"
                  />
                </div>
              </>
            )}
          </div>
        )}
        {paymentMethod === 'digital wallet' && (
          <div>
            <div className="mb-4">
              <label htmlFor="wallet" className="block text-gray-700 text-sm font-bold mb-2">Select Wallet:</label>
              <select 
                id="wallet" 
                name="wallet" 
                onChange={handleInputChange} 
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              >
                <option value="">Select Wallet</option>
                {walletOptions.map((wallet, index) => (
                  <option key={index} value={wallet}>{wallet}</option>
                ))}
              </select>
            </div>
            {selectedWallet && (
              <div className="mb-4">
                <label htmlFor="walletPin" className="block text-gray-700 text-sm font-bold mb-2">Wallet PIN:</label>
                <input 
                  type="password" 
                  id="walletPin" 
                  name="walletPin" 
                  value={walletPin}
                  onChange={handleInputChange} 
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                  placeholder="Enter wallet PIN"
                />
              </div>
            )}
          </div>
        )}
        <div className="flex items-center justify-center">
          <button 
            onClick={handlePayment} 
            disabled={isLoading} 
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${isLoading && 'opacity-50 cursor-not-allowed'}`}
          >
            {isLoading ? 'Processing...' : 'Pay Now'}
          </button>
        </div>
        {paymentStatus && <p className="text-green-500 text-center mt-4">{paymentStatus}</p>}
      </div>
    </div>
    </div>
    
    </>
  );
};

export default Payment;
