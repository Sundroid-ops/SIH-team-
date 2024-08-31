// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { Client, Databases, Realtime } from 'appwrite';
// import { Button } from './ui/Button';
// import { Textarea } from './ui/Textarea';

// // Initialize the Appwrite client
// const client = new Client()
//   .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT) // Your Appwrite Endpoint
//   .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID); // Your Project ID

// const databases = new Databases(client);
// const realtime = new Realtime(client);

// const Chat = () => {
//   const { itemId, buyerId, sellerId } = useParams();
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState('');

//   useEffect(() => {
//     fetchMessages();

//     // Listen to real-time updates
//     const unsubscribe = realtime.subscribe(
//       `databases.${import.meta.env.VITE_APPWRITE_DATABASE_ID}.collections.${import.meta.env.VITE_APPWRITE_MESSAGES_COLLECTION_ID}.documents`,
//       (response) => {
//         if (response.events.includes('databases.*.collections.*.documents.*.create')) {
//           setMessages((prevMessages) => [...prevMessages, response.payload]);
//         }
//       }
//     );

//     return () => {
//       unsubscribe(); // Unsubscribe from real-time updates
//     };
//   }, [itemId]);

//   const fetchMessages = async () => {
//     try {
//       const response = await databases.listDocuments(
//         import.meta.env.VITE_APPWRITE_DATABASE_ID,
//         import.meta.env.VITE_APPWRITE_MESSAGES_COLLECTION_ID,
//         [
//           // Filter messages by itemId
//           Query.equal('item_id', itemId),
//           Query.orderAsc('created_at'),
//         ]
//       );
//       setMessages(response.documents);
//     } catch (error) {
//       console.error('Error fetching messages:', error.message);
//     }
//   };

//   const handleSendMessage = async (e) => {
//     e.preventDefault();

//     if (!itemId || !buyerId || !sellerId || !newMessage.trim()) {
//       return;
//     }

//     const message = {
//       item_id: itemId,
//       buyer_id: buyerId,
//       seller_id: sellerId,
//       sender_id: buyerId, // Assuming the current user is the buyer
//       content: newMessage,
//     };

//     try {
//       await databases.createDocument(
//         import.meta.env.VITE_APPWRITE_DATABASE_ID,
//         import.meta.env.VITE_APPWRITE_MESSAGES_COLLECTION_ID,
//         'unique()', // You can generate a unique ID or use 'unique()'
//         message
//       );
//       setNewMessage(''); // Clear the input after sending the message
//     } catch (error) {
//       console.error('Error sending message:', error.message);
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <div className="chat-window bg-gray-100 rounded-lg shadow-lg p-4 max-h-[70vh] overflow-y-scroll">
//         {messages.map((msg) => (
//           <div key={msg.$id} className={`message ${msg.sender_id === buyerId ? 'text-right' : 'text-left'}`}>
//             {msg.content && <p>{msg.content}</p>}
//             <span className="text-sm text-gray-500">{new Date(msg.created_at).toLocaleTimeString()}</span>
//           </div>
//         ))}
//       </div>

//       <form onSubmit={handleSendMessage} className="flex gap-2 mt-4">
//         <Textarea
//           placeholder="Type your message..."
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//           className="flex-grow"
//         />
//         <Button type="submit">Send</Button>
//       </form>
//     </div>
//   );
// };

// export default Chat;
