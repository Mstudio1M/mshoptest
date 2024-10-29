const express = require('express');
const fetch = require('node-fetch');
const app = express();
app.use(express.json());

// Замініть на ваш токен Telegram бота та ID чату
const TELEGRAM_BOT_TOKEN = '7613250198:AAFdiSam6sgR_IY5J26VY7sNB8l5e3YJwLs';
const CHAT_ID = '5081289753';

app.post('/send-to-bot', (req, res) => {
    const { message } = req.body;

    // Відправка повідомлення в Telegram
    fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            res.json({ success: true });
        } else {
            res.json({ success: false });
        }
    })
    .catch(error => {
        console.error('Error:', error);
        res.json({ success: false });
    });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
const response = await fetch('https://mshoptest.onrender.com/order', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ items, total, username })
});

