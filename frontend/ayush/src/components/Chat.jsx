import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import { Button } from './ui/Button';
import { Textarea } from './ui/Textarea';

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_PUBLIC_KEY);

const Chat = () => {
  const { itemId, buyerId, sellerId } = useParams();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [newImage, setNewImage] = useState(null);

  useEffect(() => {
    fetchMessages();

    // new messages in real-time
    const subscription = supabase
      .from(`messages:item_id=eq.${itemId}`)
      .on('INSERT', (payload) => {
        setMessages((prevMessages) => [...prevMessages, payload.new]);
      })
      .subscribe();

    return () => {
      supabase.removeSubscription(subscription);
    };
  }, [itemId]);

  const fetchMessages = async () => {
    const { data, error } = await supabase
      .from('messages')
      .select('*')
      .eq('item_id', itemId)
      .order('created_at', { ascending: true });
  
    if (error) {
      console.error("Error fetching messages:", error.message);
    } else {
      console.log("Fetched Messages:", data);
      setMessages(data || []);
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();

    let image_url = null;
    if (newImage) {
      const { data, error } = await supabase.storage
        .from('chat-images')
        .upload(`${Date.now()}-${newImage.name}`, newImage);

      if (error) {
        console.error('Error uploading image:', error.message);
        return;
      }

      image_url = data.Key;
    }

    if (!itemId || !buyerId || !sellerId) {
        return <div>Error: Missing parameters</div>;
      }

    const message = {
      item_id: itemId,
      buyer_id: buyerId,
      seller_id: sellerId,
      sender_id: buyerId, // Assuming the current user is the buyer
      content: newMessage,
      image_url,
    };

    await supabase.from('messages').insert([message]);
    setNewMessage('');
    setNewImage(null);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="chat-window bg-gray-100 rounded-lg shadow-lg p-4 max-h-[70vh] overflow-y-scroll">
        {messages.map((msg) => (
          <div key={msg.id} className={`message ${msg.sender_id === buyerId ? 'text-right' : 'text-left'}`}>
            {msg.content && <p>{msg.content}</p>}
            {msg.image_url && <img src={msg.image_url} alt="Shared" className="max-w-xs" />}
            <span className="text-sm text-gray-500">{new Date(msg.created_at).toLocaleTimeString()}</span>
          </div>
        ))}
      </div>

      <form onSubmit={handleSendMessage} className="flex gap-2 mt-4">
        <Textarea
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-grow"
        />
        <input type="file" onChange={(e) => setNewImage(e.target.files[0])} />
        <Button type="submit">Send</Button>
      </form>
    </div>
  );
};

export default Chat;
