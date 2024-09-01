// src/components/History.jsx
import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import { FaTrashAlt } from 'react-icons/fa';

const History = () => {
  const [transactions, setTransactions] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);

  // Fetch transactions from localStorage
  useEffect(() => {
    const savedTransactions = localStorage.getItem('transactions');
    if (savedTransactions) {
      setTransactions(JSON.parse(savedTransactions));
    }
  }, []);

  // Handle delete button click
  const handleDelete = (index) => {
    setDeleteIndex(index);  // Set the index of the transaction to be deleted
    setIsDialogOpen(true);  // Open the confirmation dialog
  };

  // Confirm delete action
  const confirmDelete = () => {
    if (deleteIndex !== null) {
      // Remove the transaction at the deleteIndex
      const updatedTransactions = transactions.filter((_, i) => i !== deleteIndex);
      setTransactions(updatedTransactions);  // Update the state
      localStorage.setItem('transactions', JSON.stringify(updatedTransactions));  // Update localStorage
      setIsDialogOpen(false);  // Close the dialog
      setDeleteIndex(null);  // Reset the deleteIndex
    }
  };

  // Cancel delete action
  const cancelDelete = () => {
    setIsDialogOpen(false);  // Close the dialog
    setDeleteIndex(null);  // Reset the deleteIndex
  };

  return (
    <div className="flex bg-gray-50">
      <div className="flex-1 p-8 min-h-screen ml-64">
        <h1 className="text-4xl font-bold text-indigo-600 mb-8">Transaction History</h1>
        
        {transactions.length > 0 ? (
          <div className="space-y-8">
            {transactions.map((transaction, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-6 relative">
                {/* Delete button */}
                <button
                  onClick={() => handleDelete(index)}  // Set the delete index and open the dialog
                  className="absolute top-4 right-4 text-red-500 hover:text-red-700"
                >
                  <FaTrashAlt size={20} />
                </button>
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                  Transaction on {transaction.date}
                </h2>
                <div className="space-y-4">
                  {transaction.items.map((item, itemIndex) => (
                    <div 
                      key={itemIndex} 
                      className="p-4 rounded-lg bg-indigo-50 hover:bg-indigo-100 transition duration-200"
                    >
                      <h3 className="text-xl font-semibold text-indigo-700">{item.name}</h3>
                      <p className="text-gray-600">
                        <strong>Price:</strong> ₹{item.price}
                      </p>
                      <p className="text-gray-600">
                        <strong>Quantity:</strong> {item.quantity}
                      </p>
                      <p className="text-gray-600">
                        <strong>Farmer:</strong> {item.farmerName}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center mt-20">
            <p className="text-xl text-gray-500">
              You haven't made any transactions yet.
            </p>
          </div>
        )}
      </div>

      {/* Confirmation Dialog */}
      {isDialogOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Confirm Deletion</h2>
            <p className="mb-4 text-gray-600">Are you sure you want to delete this transaction?</p>
            <div className="flex justify-end gap-4">
              <button
                onClick={cancelDelete}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
          <div className="fixed inset-0 bg-black opacity-50" onClick={cancelDelete}></div>
        </div>
      )}
    </div>
  );
};

export default History;
